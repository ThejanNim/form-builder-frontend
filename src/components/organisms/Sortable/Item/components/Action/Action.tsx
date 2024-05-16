import styles from './Action.module.scss';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onTouchStart: (event: React.TouchEvent<HTMLButtonElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

export const Action = (props: Props) => {
  return (
    <button
      className={styles.Action}
      tabIndex={0}
      onMouseDown={props.onMouseDown}
      onTouchStart={props.onTouchStart}
      onKeyDown={props.onKeyDown}
    >
      {props.children}
    </button>
  );
};
