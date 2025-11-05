import type {Rectangle as RectangleType} from "../../types/types.ts";

export interface RectangleProps {
    shape: RectangleType
}

export const Rectangle = ({shape}: RectangleProps) => {
    const rectangleStyles: React.CSSProperties = {
        width: '200px',
        height: '100px',
        border: '1px solid #000',
        position: 'fixed',
        zIndex: shape.zIndex,
    }

    return <div style={rectangleStyles}></div>
}