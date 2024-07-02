import styles from "./WorkspaceHeader.module.scss";

export function WorkspaceHeader() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Workspace</h1>
      <div>
        <button>New form</button>
      </div>
    </div>
  );
}
