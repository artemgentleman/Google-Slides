export interface ButtonProps {
    tittle: string
    icon?: string
    onClick?: () => void
    color?: string
}

export const Button = ({tittle, icon, onClick, color}: ButtonProps) => {
    return (
        <div onClick={onClick} style={{backgroundImage: `url(${icon})`, color: color}}>
            {tittle}
        </div>
    )
}