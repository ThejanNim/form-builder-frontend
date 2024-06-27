import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button(props: Readonly<ButtonProps>) {
  return (
    <button className={styles.button} type="submit">
      {props.children}
    </button>
  );
}
