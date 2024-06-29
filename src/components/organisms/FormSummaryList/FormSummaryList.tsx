import { FormSummaryTile } from "@/components/molecules/FormSummaryTile/FormSummaryTile";
import styles from "./FormSummaryList.module.scss";

export function FormSummaryList() {
  return (
    <div className={styles.list}>
      <FormSummaryTile />
    </div>
  );
}
