import styles from './Wrapper.module.scss';

interface Props {
  children: React.ReactNode;
}

export const Wrapper = (props: Props) => {
  return (
    <div className={styles.Wrapper} >
      {props.children}
    </div>
  );
}