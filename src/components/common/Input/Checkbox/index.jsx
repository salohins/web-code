import { useState } from "react"
import { motion } from "framer-motion"
import { useDispatch } from "react-redux"
import { updateData } from "../../../../redux/actions/dataActions"

import './index.scss'

const tickVariants = {
    checked: {
        pathLength: 1,
        opacity: 1,
        transition: {
            duration: 0.2,
        }
    },
    unchecked: {
        pathLength: 0,
        opacity: 0,
        transition: {
            duration: 0.2,
        }
    }
}

export const Checkbox = ({ id }) => {
    const [isChecked, setChecked] = useState(false)
    const dispatch = useDispatch()

    const toggleCheckbox = () => {
        setChecked(!isChecked)
        dispatch(updateData({[id]:!isChecked}))
    }

    return (        
        <CheckboxIndicator isChecked={isChecked} toggleCheckbox={toggleCheckbox} id={id} />                
    )
}

const CheckboxIndicator = ({ isChecked, toggleCheckbox, id }) => {
    return (
        <div className="checkbox">
            <button type="button">
                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={toggleCheckbox}
                    id={id}
                />

                <div> 
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        initial={false}
                        animate={isChecked ? "checked" : "unchecked"}
                    >
                        <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                            variants={tickVariants}
                        />

                    </motion.svg>

                </div>
            </button>
        </div>
    )
}

