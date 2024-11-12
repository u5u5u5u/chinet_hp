import styles from "./style.module.scss";
import Input from "@/components/Inputs";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <h1 className={styles.title}>お問い合わせ</h1>
      <p className={styles.description}>
        弊団体へのお問い合わせはこちらよりお願い致します。
      </p>
      <Input label="お名前" id="name" />
      <Input label="会社/学校名" id="organization" />
      <Input label="メールアドレス" id="email" type="email" />
      <Input label="電話番号" id="tel" type="tel" />
      <Textarea label="お問い合わせ内容" />
      <Button label="送信" />
    </div>
  );
}
