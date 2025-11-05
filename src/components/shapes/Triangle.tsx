import type {Triangle as TriangleType} from "../../types/types.ts";

export interface TriangleProps {
    shape: TriangleType
}

export const Triangle = ({shape}: TriangleProps) => {
    const triangleShape: React.CSSProperties = {
        width: '0',
        height: '0',
        borderLeft: '50px solid transparent',
        borderRight: '50px solid transparent',
        borderBottom: '100px solid #000',
        position: 'fixed',
        zIndex: shape.zIndex,
    }

    return <div style={triangleShape}></div>
}