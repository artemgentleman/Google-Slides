import type {Circle as CircleType} from "../../types/types.ts";

export interface CircleProps {
    shape: CircleType
}

export const Circle = ({shape}: CircleProps) => {
    const circleStyles: React.CSSProperties = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        border: '1px solid #000',
        position: 'fixed',
        zIndex: shape.zIndex,
        top: shape.center.y,
        left: shape.center.x,
    }

    const changePosition = () => {
        
    }

    return <div style={circleStyles} onClick={changePosition}></div>
}