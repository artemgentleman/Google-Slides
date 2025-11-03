import styles from './Circle.module.css'
import type {ShapeType} from "../../types/types.ts";

export interface CircleProps {
    shape: ShapeType
}

export const Circle = ({shape}: CircleProps) => {
    return <div className={styles.circle}>
        {shape.name}
    </div>
}