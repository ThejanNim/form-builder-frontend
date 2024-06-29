import { UserProfileIcon } from "@/components/atoms/UserProfileIcon";
import styles from "./UserProfile.module.scss";

export function UserProfile() {
  return (
    <div className={styles["user-profile"]}>
      <UserProfileIcon />
      <span className={styles.label}>Thejan</span>
    </div>
  );
}
