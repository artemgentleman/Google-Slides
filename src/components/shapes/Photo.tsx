import type {Photo as PhotoType} from "../../types/types.ts";

export interface PhotoProps {
    shape: PhotoType
}

export const Photo = ({shape}: PhotoProps) => {
    const photoStyles: React.CSSProperties = {
        width: '200px',
        height: '100px',
        border: '1px solid #000',
        position: 'fixed',
        zIndex: shape.zIndex,
    }

    return <div style={photoStyles}></div>
}