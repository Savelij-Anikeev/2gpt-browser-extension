import styles from "./Message.module.css";

import { IMessage } from "../../interfaces";

interface IMessageProps {
    message: IMessage
    ref?: any
}


export default function Message(props: IMessageProps){
    const message = props.message
    const dateStyle = message.isAI 
                    ? styles.alignSelfStart 
                    : styles.alignSelfEnd;
    const messageStyle = message.isAI 
                    ? `${styles.message} ${styles.messageAI}`
                    : `${styles.message}`

    return (
        <div className={messageStyle} ref={props?.ref}>
            <div className={styles.messageInner}>
                <div className={styles.body}>
                    {message.body} 
                </div>
                <div className={`${dateStyle} ${styles.date}`}>
                    {message?.sended_time}
                </div>
            </div>
        </div>
    );
}