import { ReactNode } from "react";
import styles from "./style.module.scss"

type Props = {
    label: ReactNode;
    
};

const Input = ({label}: Props) => {
    return (
        <div>
            <label className={styles.label} htmlFor="">{label}</label>
            <input className={styles.inputField} type="text" />
        </div>
    )
}
export default Input;

