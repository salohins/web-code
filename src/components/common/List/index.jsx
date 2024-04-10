import { Row } from "../Row"
import { Image } from "../Image"

import './index.scss'

export const List = ({ points, bulletIcon, bulletSize, id, className }) => {

    return (
        <ul className='list'>
            {points.map(point => {
                return (
                    <li id={id} key={point} className={className}><Row alignItems={'center'}><Image name={bulletIcon} height={bulletSize} /><span>{point}</span></Row></li>
                )
            })}
        </ul>
    )
}