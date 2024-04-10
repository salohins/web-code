import { motion, Variants } from 'framer-motion'
import { Row } from '../Row'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Image } from '../Image'
import DownArrow from '../../../assets/images/down-arrow.svg'

import './index.scss'

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
}

export const DropDown = ({ id, title, items, className }) => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <motion.span
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className={`dropdown${' ' + className || ''}`}
            id={id}
        >
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                onHoverStart={() => setIsOpen(true)}
                onHoverEnd={() => setIsOpen(false)}
            >
                <Row>
                    {title}

                    <motion.div
                        animate={isOpen ? "open" : "closed"}

                        variants={{
                            open: { scaleY: -1 },
                            closed: { scaleY: 1 }
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ margin: 0 }}
                    >                                   
                        <svg className='dropdown-down-icon' version="1.1" height={'10px'} xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 330 330">
                            <path  id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                        </svg>

                    </motion.div>


                </Row>


            </motion.button>
            <motion.ul
                variants={{
                    open: {
                        clipPath: "inset(-20% -20% -20% -20% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.5,
                            delayChildren: 0.1,
                            staggerChildren: 0.05
                        }
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3
                        }
                    }
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
                onHoverStart={() => setIsOpen(true)}
                onHoverEnd={() => setIsOpen(false)}
            >
                {items.map((item, index) => {
                    return (
                        <motion.li key={index} variants={itemVariants}>
                            <span 
                                className='dropdown-item' 
                                onClick={() => {
                                    navigate(item.url)
                                    setIsOpen(false)
                                }}
                                style={{ whiteSpace: 'nowrap' }}
                            >
                                {item.title}
                            </span></motion.li>
                    )
                })}
            </motion.ul>
        </motion.span>
    );
}
