import styles from "./Header.module.css"
import profileLogo from "../../images/icons/profile.png"

import logo from "../../images/icons/logo2.png"

interface IHeaderProps {
    setIsOpen: any
}


export default function Header(props: IHeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <div className={styles.logo}>
                    <img src={logo} 
                         className={styles.logoIcon} />
                    <span className={styles.logoText}>2GPT</span>
                </div>
                <div className={styles.profile}>
                    <img src={profileLogo} 
                    alt="account" 
                    className={styles.profileLogo}/>
                    <a onClick={props.setIsOpen}>
                        sign in
                    </a>
                </div>
            </div>
        </header>
    );
}