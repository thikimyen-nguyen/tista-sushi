import styles from "./index.module.css";
export function PrimaryButton({ label, onClick, disabled }) {
  return (
    <button
      className={styles.primaryButton}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
export function SecondaryButton({ label, onClick }) {
  return (
    <button className={styles.secondaryButton} onClick={onClick}>
      {label}
    </button>
  );
}
