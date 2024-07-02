import styles from "./DashboardHeader.module.scss";

export function DashboardHeader() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Home</h1>
      <div>
        <button>New workspace</button>
        <button>New form</button>
      </div>
    </div>
  );
}
