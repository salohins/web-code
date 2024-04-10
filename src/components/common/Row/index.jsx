import { useWindowSize } from '@uidotdev/usehooks';
import variables from '../../../assets/styles/_variables.scss'; 

import './index.scss';

export const Row = ({reverse, mobileColumns, responsive, children, justifyContent, alignItems, className, color}) => {    
    const size = useWindowSize();

    const getRows = () => {
        const rows = Math.ceil(children.length / mobileColumns); // Calculate the number of rows needed

        const finalRows = [];

        for (let i = 0; i < rows; i++) {
            const rowChildren = children.slice(i * mobileColumns, (i + 1) * mobileColumns); // Extract children for the current row
            finalRows.push(<div className='row static'>{rowChildren}</div>); // Push the row to finalRows
        }

        return finalRows;
    };

    const renderRows = () => {
        if (responsive && size.width < parseInt(variables.breakpoint_sm, 10) && mobileColumns) {
            return getRows();
        } else {
            return (
                <div
                    className={`${className || ''} ${!reverse ? 'row' : 'row-reverse'} ${!responsive && 'static' || ''}`}
                    style={{ 
                        justifyContent,
                        alignItems: alignItems || 'center',
                        color: variables[`${color}_color`]
                    }}
                >
                    {children}
                </div>
            );
        }
    };

    return <>{renderRows()}</>;
};
