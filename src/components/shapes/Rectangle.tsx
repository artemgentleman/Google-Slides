import type {ShapeType} from "../../types/types.ts";
import styles from "./Rectangle.module.css";

export interface RectangleProps {
    shape: ShapeType
}

export const Rectangle = ({shape}: RectangleProps) => {
    return <div className={styles.rectangle}>{shape.name}</div>
}