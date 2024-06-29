import * as Avatar from "@radix-ui/react-avatar";
import styles from "./UserProfileIcon.module.scss";

export function UserProfileIcon() {
  return (
    <Avatar.Root className={styles["avatar-root"]}>
      {/* <Avatar.Image
        className={styles["avatar-image"]}
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      /> */}
      <Avatar.Fallback className={styles["avatar-fallback"]} delayMs={600}>
        T
      </Avatar.Fallback>
    </Avatar.Root>
  );
}
