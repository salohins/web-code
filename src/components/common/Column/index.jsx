import './index.scss'
import variables from '../../../assets/styles/_variables.scss'

import { useWindowSize } from '@uidotdev/usehooks';

export const Column = ({flex, justifyContent, alignItems, className, children, onClick, color}) => {
    const size = useWindowSize();    

    return (
        <div 
            className={`column ${className || ''}`} 
            style={{
                flex: size.width < variables.breakpoint_sm.slice(0, -2) ? flex?.mobile || 1 : flex?.desktop || 1, 
                justifyContent,
                alignItems: size.width < variables.breakpoint_sm.slice(0, -2) ? 'center' : alignItems,
                color: variables[`${color}_color`]
            }}
            onClick={onClick}
        >
            {children}
        </div>
    )

}