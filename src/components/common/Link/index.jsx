import { useNavigate } from "react-router-dom"
import { scrollTo } from "../../../utils/helpers"

import './index.scss'

export const Link = ({href, children}) => {
    const navigate = useNavigate()

    return (
        <span 
            className="link"
            onClick={async () => {
                await navigate(href)
                scrollTo('', 'start')
            }}
        >
            { children }
        </span>
    )
}