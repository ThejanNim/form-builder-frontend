import styles from "./FormSummaryTile.module.scss";

export function FormSummaryTile() {
  return (
    <div className={styles.tile}>
      <h3 className={styles.title}>First Form</h3>
      <span className={styles.description}>
        No completed submissions yet&nbsp;·&nbsp;Edited 12m ago
      </span>
    </div>
  );
}
