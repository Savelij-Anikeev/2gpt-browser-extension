// styles
import styles from "./Header.module.css"

// images
import profileLogo from "../../images/icons/profile.png"
import logo from "../../images/icons/logo2.png"

// react-dom-router
import { Link } from "react-router-dom";


export default function Header() {
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
                    <Link to='/authorize'>
                        sign up
                    </Link>
                </div>
            </div>
        </header>
    );
}