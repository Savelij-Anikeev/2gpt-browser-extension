// styles
import styles from "./Confirmation.module.css"

// react hooks
import { useState, useEffect } from "react"

// react-dom-router
import { Link } from "react-router-dom"

// logic (validators)
import { validateConfirmationCode } from "../../logic/validators"

// interfaces
interface IInputStyles {
    code: string | null
    btn: string | null
}

interface IIsInputValid {
    code: boolean
}

interface IInputValues {
    code: string
}


export default function Confirmation(){
    // states
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const [inputValues, setInputValues] = useState<IInputValues>({code: ''});
    const [inputStyles, setInputStyles] = useState<IInputStyles>({code: '', btn: ''});                                                  
    const [isValid, setIsValid] = useState<IIsInputValid>({code: true});

    // function for button styling and functionality
    useEffect(() => {
        function handleButtonChange(){
            const value = (isValid.code) && !(inputValues.code === '');
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
            res.code = newValue;
            return res;
        });

        // setting boolean values
        setIsValid(prev => {
            const res = {...prev};
            res.code = isValidValue;
            return res;
        });
        

        // setting up proper styles
        if (isValidValue) {
            // success
            setInputStyles(prev => {
                const res = {...prev};
                res.code = `${styles.authInputSuccess}`;
                return res;
            });
        } else {
            // failure
            setInputStyles(prev => {
                const res = {...prev};
                res.code = `${styles.authInputError}`;
                return res;
            });
        }
    }

    return (
        <div className={styles.authForm}>
            <div className={styles.authInner}>
                <div className={styles.authHeader}>
                    CONFIRMATON
                </div>
                <div className={styles.authMain}>
                    <input type="text" name="email" 
                        className={`${styles.authInput} ` + `${inputStyles?.code}`}
                        placeholder="confirmation code"
                        value={inputValues.code}
                        onChange={e => handleInputChange(e, validateConfirmationCode, 'email')}/>
                    {!isValid.code ? 
                    <div className={styles.warningBlock}>
                        <p>Invalid code format! Example:</p>
                        <i>A1aUz3</i>
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
                        onClick={()=>alert('123')}
                        value='Get confirmation code'/>
                </div>
            </div>
        </div>
    );
}
