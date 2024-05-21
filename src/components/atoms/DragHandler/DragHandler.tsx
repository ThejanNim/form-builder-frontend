import { CSSProperties } from "react";
import styles from "./DragHandler.module.scss";

import HandleIcon from './assets/handle.svg';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    cursor?: CSSProperties['cursor'];
}

export const DragHandler = (props: Props) => {
    return (
        <button className={styles.DragHandler} style={{ cursor: props.cursor }} {...props}>
            <HandleIcon />
        </button>
    );
};
