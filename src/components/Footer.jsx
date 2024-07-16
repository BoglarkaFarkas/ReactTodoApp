import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalLengt }) {
  return (
    <div className={styles.footer}>
      <span>Completed todos:{completedTodos}</span>
      <span>Total todos:{totalLengt}</span>
    </div>
  );
}
