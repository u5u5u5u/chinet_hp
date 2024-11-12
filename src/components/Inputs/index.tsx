import { ReactNode } from "react";
import styles from "./style.module.scss";

type Props = {
  label: ReactNode;
  id: string;
  type?: string;
};

const Input = ({ label, id, type = "text" }: Props) => {
  return (
    <div className={styles.input}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.inputField} type={type} />
      <span className={styles.form_error} id={`${id}_error`}></span>
    </div>
  );
};
export default Input;
