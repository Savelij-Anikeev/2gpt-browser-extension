import styles from "./Chat.module.css"

import Dialog from "../Dialog";
import Keyboard from "../Keyboard"; 


interface IChatProps {
    selectedAI: string
}


export default function Chat(props: IChatProps){
    return (
        <div className={styles.Chat}>
            <div className={styles.ChatInner}>
                <Dialog />
                <Keyboard />
            </div>
        </div>
    );
}
