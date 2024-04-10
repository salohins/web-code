import { useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { updateData } from '../../../../redux/actions/dataActions'


import './index.scss'

export const Switch = ({ initial, id }) => {
    const [isOn, setIsOn] = useState(initial)
    const dispatch = useDispatch()

    const toggleSwitch = () => {
        setIsOn(!isOn)
        dispatch(updateData({ [id]: !isOn }))
    }

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    }

    return (
        <div
            className='switch'
            name={id} id={id}
            data-ison={isOn}
            onClick={toggleSwitch}
        >
            <motion.div className='switch-handle' layout transition={spring} />
        </div>


    )
}