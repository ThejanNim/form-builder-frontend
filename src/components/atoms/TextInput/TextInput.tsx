import styles from "./TextInput.module.scss";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
  }

export function TextInput(props: Readonly<TextInputProps>) {
  return <input type={props.type} className={styles.input} {...props} />;
}
