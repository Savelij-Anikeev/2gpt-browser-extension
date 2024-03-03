import styles from "./Keyboard.module.css"

import sentIcon from "../../images/icons/sent.png"


export default function Keyboard(){
    return (
        <div className={styles.keyboard}>
            <div className={styles.keyboardInner}>
                <textarea name="userPromptText"
                          placeholder="Input your prompt here..."
                          id="IdUserPromptText"
                          cols={30} rows={10}
                          className={styles.keyboardTextarea}>
                </textarea>
                <div className={styles.keyboardButton}>
                    <img src={sentIcon}
                        alt="send" 
                        className={styles.sentIcon}/>
                </div>
            </div>
        </div>
    );
}