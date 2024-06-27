import styles from "./SidePanelItem.module.scss";

interface SidePanelItemProps {
  label: string;
  icon: React.ReactNode;
}

export function SidePanelItem(props: Readonly<SidePanelItemProps>) {
  return (
    <div className={styles["side-panel-item"]}>
      <div className={styles.icon}>{props.icon}</div>
      <span className={styles.label}>{props.label}</span>
    </div>
  );
}
