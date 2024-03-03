import styles from "./AuthForm.module.css"

import { useState, useEffect, ChangeEvent, ChangeEventHandler } from "react"

import logoIcon from "../../images/icons/logo2.png"
import googleLogo from "../../images/icons/google.png"
import githubLogo from "../../images/icons/github.png"

import { validateEmail, validatePassword } from "../../logic/validators"


interface IInputStyles {
    email: string | null
    password: string | null
    btn: string | null
}

interface IIsInputValid {
    email: boolean
    password: boolean
}

interface IInputValues {
    email: string
    password: string
}


export default function AuthForm(){
    // states
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const [inputValues, setInputValues] = useState<IInputValues>({email: '', password: ''});
    const [inputStyles, setInputStyles] = useState<IInputStyles>({email: '', 
                                                                  password: '',
                                                                  btn: ''});                                                  
    const [isValid, setIsValid] = useState<IIsInputValid>({email: true, password: true});

    // function for button styling and functionality
    useEffect(() => {
        function handleButtonChange(){
            const value = (isValid.email && isValid.password) && !(inputValues.email === '' || inputValues.password === '');
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
            fieldName === 'email' ? res.email = newValue : res.password = newValue;
            return res;
        });

        // setting boolean values
        setIsValid(prev => {
            const res = {...prev};
            fieldName === 'email' ? res.email = isValidValue : res.password = isValidValue;
            return res;
        });
        

        // setting up proper styles
        if (isValidValue) {
            // success
            setInputStyles(prev => {
                const res = {...prev};
                fieldName === 'email' ? res.email = `${styles.authInputSuccess}` : res.password = `${styles.authInputSuccess}`;
                return res;
            });
        } else {
            // failure
            setInputStyles(prev => {
                const res = {...prev};
                fieldName === 'email' ? res.email = `${styles.authInputError}` : res.password = `${styles.authInputError}`;
                return res;
            });
        }
    }

    return (
        <div className={styles.authForm}>
            <div className={styles.authInner}>
                <div className={styles.authHeader}>
                    LOGIN/REGISTER
                </div>
                <div className={styles.authSocials}>
                    <div className={styles.authSocial}>
                        <img src={googleLogo} alt="google" 
                        className={styles.socialLogos}/>
                    </div>
                    <div className={styles.authSocial}>
                        <img src={githubLogo} alt="github"
                        className={styles.socialLogos}/>
                    </div>
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
                    <input type="password" name="psw"
                        className={`${styles.authInput} ` + `${inputStyles?.password}`}
                        placeholder="password" 
                        value={inputValues.password}
                        onChange={e => handleInputChange(e, validatePassword, 'password')}/>
                    {!isValid.password ? 
                    <div className={styles.warningBlock}>
                        <p>Your password length should be 8 characters or more</p>
                    </div> : <></>}
                    <div className={styles.authLink}></div>
                    <a href="" className={styles.authLinkA}>
                        forgot password?
                    </a>
                    <input type="submit" 
                        name="submitBtn"
                        className={`${styles.authBtn} ` + `${inputStyles?.btn}`}
                        disabled={isButtonDisabled}
                        onClick={()=>alert('123')}/>
                </div>
            </div>
        </div>
    );
}
