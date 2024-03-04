// styles
import styles from "./Modal.module.css";

// images
import closeIcon from "../../images/icons/close.png"
import backIcon from "../../images/icons/back.png"

// react-router-dom
import { Link, useNavigate } from "react-router-dom";

// interfaces
interface IModalProps {
    children: React.ReactNode
}



export default function Modal(props: IModalProps){
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.modal}>
                <div className={styles.darkBg} />
                <div className={styles.modalInner}>
                    <div className={styles.modalHeader} style={{overflow: 'hidden'}}>
                        <img src={backIcon} 
                             alt="go back" 
                             onClick={() => navigate(-1)}
                             className={styles.backBtn}/>
                        <Link to='/' style={{overflow: 'hidden'}}>
                        <img src={closeIcon} 
                             alt="close" 
                             className={styles.closeIcon}/>
                        </Link>
                    </div>
                    <div className={styles.modalBody}>
                        { props.children }
                    </div>
                </div>
            </div>
        </>
    );
}
