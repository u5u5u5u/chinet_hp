import styles from "./style.module.scss";
import Input from "@/components/Inputs/Input"

export default function Contact () {
    return (
        <>
        <h1 className={styles.title}>contact</h1>
        <Input label="お名前"></Input>
        <Input label="会社/学校名"></Input>
        </>
    );
}