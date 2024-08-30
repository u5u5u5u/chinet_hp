import { ReactNode } from "react";
import styles from "./style.module.scss"

type Props = {
    label: ReactNode;
    
};

const Button = ({label}:Props) => {
    return (
        <div className={styles.buttonContainer}>
        <button className={styles.submitButton}>{label}</button>
        </div>
    );
};
export default Button;