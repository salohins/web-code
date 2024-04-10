export const OnTop = ({children, id, className, left, top, right, bottom}) => {
    const style = {
        position: 'absolute',
        left: left, 
        top: top,
        right: right,
        bottom: bottom,
        zIndex: 2,
        transform: 'translate(-50%, -50%)'
    }
    
    return (
        <div style={style}>
            { children }
        </div>
    )
}