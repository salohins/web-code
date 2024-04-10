import { useWindowSize } from '@uidotdev/usehooks';
import breakpoint from '../../../assets/styles/_variables.scss';

export const Space = ({size, desktop, mobile}) => {
    const WindowSize = useWindowSize();

    return (
        <div style={{
            width: '100%', 
            height: size+'vh',
            display: ((!mobile && !desktop) || ((mobile && WindowSize.width < parseInt(breakpoint.breakpoint_sm, 10) || desktop && WindowSize.width > parseInt(breakpoint.breakpoint_sm, 10))) && 'block') || 
            ((!mobile && WindowSize.width < parseInt(breakpoint.breakpoint_sm, 10) || !desktop && WindowSize.width > parseInt(breakpoint.breakpoint_sm, 10)) && 'none'),
        }} />        
    )
}