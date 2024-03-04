// styles
import styles from "./ResetPassword.module.css"

// react hooks
import { useState, useEffect } from "react"

// react-dom-router
import { Link, useNavigate } from "react-router-dom"

// logic (validators)
import { validateEmail } from "../../logic/validators"

// interfaces
interface IInputStyles {
    email: string | null
    btn: string | null
}

interface IIsInputValid {
    email: boolean
}

interface IInputValues {
    email: string
}


export default function ResetPassword(){
    //
    const navigate = useNavigate();

    // states
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const [inputValues, setInputValues] = useState<IInputValues>({email: ''});
    const [inputStyles, setInputStyles] = useState<IInputStyles>({email: '', btn: ''});                                                  
    const [isValid, setIsValid] = useState<IIsInputValid>({email: true});

    // function for button styling and functionality
    useEffect(() => {
        function handleButtonChange(){
            const value = (isValid.email) && !(inputValues.email === '');
            setIsButtonDisabled(!value);
            setInputStyles(prev => {
                const res = {...prev};
                value ? res.btn = `${styles.authBtnOk}` : res.btn = ``;
                return res; 
            })
        };
        handleButtonChange();

    }, [isValid])

    // function for handling input changes
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>, validFunc: Function, fieldName: string) {
        const newValue: string = e.target.value;
        const isValidValue: boolean = validFunc(newValue);

        // changing values
        setInputValues(prev => {
            const res = {...prev};
            res.email = newValue;
            return res;
        });

        // setting boolean values
        setIsValid(prev => {
            const res = {...prev};
            res.email = isValidValue;
            return res;
        });
        

        // setting up proper styles
        if (isValidValue) {
            // success
            setInputStyles(prev => {
                const res = {...prev};
                res.email = `${styles.authInputSuccess}`;
                return res;
            });
        } else {
            // failure
            setInputStyles(prev => {
                const res = {...prev};
                res.email = `${styles.authInputError}`;
                return res;
            });
        }
    }

    return (
        <div className={styles.authForm}>
            <div className={styles.authInner}>
                <div className={styles.authHeader}>
                    RESET PASSWORD
                </div>
                <div className={styles.authMain}>
                    <input type="email" name="email" 
                        className={`${styles.authInput} ` + `${inputStyles?.email}`}
                        placeholder="email"
                        value={inputValues.email}
                        onChange={e => handleInputChange(e, validateEmail, 'email')}/>
                    {!isValid.email ? 
                    <div className={styles.warningBlock}>
                        <p>Email is not valid! Example:</p>
                        <i>test@gmail.com</i>
                    </div> : <></>} 
                    {/* <div className={styles.authLink}>
                        <Link to='/authorize' className={styles.authLinkA}>
                            Back to login/register page
                        </Link>
                    </div> */}
                    <input type="submit" 
                        name="submitBtn"
                        className={`${styles.authBtn} ` + `${inputStyles?.btn}`}
                        disabled={isButtonDisabled}
                        onClick={()=>navigate('/confirmation')}
                        value='Get confirmation code'/>
                </div>
            </div>
        </div>
    );
}
