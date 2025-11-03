import styles from './Triangle.module.css'
import type {ShapeType} from "../../types/types.ts";

export interface TriangleProps {
    shape: ShapeType
}

export const Triangle = ({shape}: TriangleProps) => {
    return <div className={styles.triangle}>{shape.name}</div>
}