import styles from "./Nav.module.css"

import { AIArray } from "../../data"

interface INavProps {
    selectedAI: string | null
    handleChange: any
}


export default function Nav(props: INavProps){
    return (
        <nav className={styles.nav}>
            <div className={styles.navInner}>
                {AIArray.map((elem) => (
                    <div 
                    className={elem.name == props.selectedAI 
                    ? `${styles.navOption} ${styles.navOptionActive}` 
                    : `${styles.navOption}`}
                    onClick={() => props.handleChange(elem.name)}
                    key={elem.id}>
                        {elem.name}
                    </div>
                ))}
            </div>
        </nav>
    );
}