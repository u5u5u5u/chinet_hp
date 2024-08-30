import { ReactNode } from "react";
import styles from "./style.module.scss"

type Props = {
    label: ReactNode;
    
};

const Textarea = ({label}:Props) => {
    return (
        <div className={styles.textareaContainer}>
        <label className={styles.label} htmlFor="">{label}</label>
        <textarea className={styles.textareaField}/>
        </div>
    );
};
export default Textarea;