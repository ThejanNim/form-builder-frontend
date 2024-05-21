import styles from './List.module.scss';

export interface Props {
    children: React.ReactNode;
}

export const List = (props: Props) => {
    return (
        <ul className={styles.List} >
            {props.children}
        </ul>
    );
};
