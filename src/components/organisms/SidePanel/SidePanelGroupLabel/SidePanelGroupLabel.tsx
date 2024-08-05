import styles from "./SidePanelGroupLabel.module.scss";

interface SidePanelGroupLabelProps {
  label: string;
}

export function SidePanelGroupLabel(props: Readonly<SidePanelGroupLabelProps>) {
  return <h4 className={styles.label}>{props.label}</h4>;
}
