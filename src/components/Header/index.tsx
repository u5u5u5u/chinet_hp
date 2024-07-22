import styles from "./style.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Header</h1>
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
        </ul>
        <input />
        <div></div>
      </header>
    </>
  );
};

export default Header;
