import { ReactNode } from "react";
import styles from "./style.module.scss"

type Props = {
    label: ReactNode;
    
};

const Input = ({label}: Props) => {
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input type="text" />
        </div>
    )
}
export default Input;