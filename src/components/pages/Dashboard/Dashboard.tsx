import { DashboardHeader } from "./DashboardHeader";
import styles from "./Dashboard.module.scss";
import { FormSummaryList } from "@/components/organisms/FormSummaryList";

export function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <DashboardHeader />
      <FormSummaryList />
    </div>
  );
}
