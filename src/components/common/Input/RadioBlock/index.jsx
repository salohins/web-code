import { Row } from "../../Row";
import { Column } from "../../Column";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "../../../../redux/actions/dataActions";
import { Fragment } from "react";

import './index.scss'


export const RadioBlock = ({ id, columns, options }) => {
    const [checked, setChecked] = useState()
    const dispatch = useDispatch()

    const getKey = () => {
        return Math.floor(Math.random() * (9999999 - 1 + 1)) + 1
    }

    const getRows = () => {
        const rows = Math.ceil(options.length / columns); // Calculate the number of rows needed        
        
        const finalRows = []

        for (let i = 0; i < rows; i++) {
            let j = 0
            const blockRow = options.slice(i * columns, ( i + 1) * columns); // Extract children for the current row            
            finalRows.push(
                <Row responsive key={getKey()}>
                    {blockRow.map((block) => {
                        j++
                        return (
                            <Fragment key={getKey()}>
                                <Column 
                                    onClick={() => {
                                        setChecked(block)
                                        dispatch(updateData({[id]:block}))
                                    }} 
                                    className={checked === block ? 'radio-block radio-block-selected' : 'radio-block'}
                                    
                                    >
                                        {block}                                    
                                </Column>
                                {
                                    (j > 0 && j !== blockRow.length || blockRow.length === 1) 
                                        && <Column flex={{ desktop: 0.025, mobile: 0 }} /> //empty column for the space
                                }
                                { (blockRow.length === 1 && columns !== 1) && <Column  className={'radio-block-empty'} /> }
                            </Fragment>
                        )
                    })}                
                </Row>
            ); // Push the row to finalRows
        }

        return finalRows;
    };

    return (
        <>{getRows()}</>
    )
}