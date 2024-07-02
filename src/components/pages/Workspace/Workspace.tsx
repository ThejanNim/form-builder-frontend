import { WorkspaceHeader } from "./WorkspaceHeader";
import styles from "./Workspace.module.scss";

export function Workspace() {
  return (
    <div className={styles.workspace}>
      <WorkspaceHeader />
    </div>
  );
}
