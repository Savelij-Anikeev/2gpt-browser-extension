import styles from "./Dialog.module.css";

import { useEffect, useRef } from "react";
import { TestMessageArray } from "../../data";

import Message from "../Message";


export default function Dialog(){   
    const refToBottom = useRef<HTMLDivElement>(null);
    useEffect(() => {
        refToBottom.current?.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    }, [])

    return (
        <div className={styles.dialog}>
            <div className={styles.dialogInner}>
                { TestMessageArray.map(elem => (
                        <Message message={elem} key={elem.id} />
                ))}
                <div ref={refToBottom} />
            </div>
        </div>
    );
}