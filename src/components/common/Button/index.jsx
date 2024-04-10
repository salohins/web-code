import { Row } from "../Row"
import { Image } from "../Image"

export const Button = ({onClick, id, children, type, color, icon}) => {
    return (
        <button style={{color: color}}  id={id} onClick={onClick} className={`button-${type}`}>
            <Row>
                {
                    icon && <Image name={icon} height={'25px'} width={'25px'} className={'button-icon'} />
                }
                
                {children}
            </Row>
            
        </button>
    )
}