import styles from "./style.module.scss";
import Input from "@/components/Inputs/Input"

export default function Contact () {
    return (
        <div className={styles.contactPage}>
        
        <h1 className={styles.title}>お問い合わせ</h1>
        <p className={styles.description}>弊団体へのお問い合わせはこちらよりお願い致します。</p>
        <Input label="お名前"></Input>
        <Input label="会社/学校名"></Input>
        <Input label="メールアドレス"></Input>
        <Input label="電話番号"></Input>
        <div className={styles.textareaContainer}>
        <label className={styles.label}>お問い合わせ内容</label>
        <textarea className={styles.textareaField}></textarea>
        </div>
        <div className={styles.buttonContainer}>
        <button className={styles.submitButton}>送信</button>
        </div>
        </div>
        
    
    );
}