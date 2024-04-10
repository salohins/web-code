import { motion, AnimatePresence } from 'framer-motion'
import { Row } from '../Row'

import { Image } from '../Image'

import DownArrow from '../../../assets/images/down-arrow.svg'

import './index.scss'

export const Accordion = ({
    id,
    heading,
    justifyHeading,
    children,
    headingClassName,
    contentClassName,
    i,
    expanded,
    setExpanded,

}) => {
    const isOpen = i === expanded

    return (
        <>
            <motion.header
                initial={false}
                className={`accordion-heading${headingClassName || ''}`}
                onClick={() => setExpanded(isOpen ? false : i)}
                id={id}
            >
                <Row justifyContent={justifyHeading}>
                    <span>{heading}</span>
                    <motion.div
                        animate={isOpen ? "open" : "closed"}

                        variants={{
                            open: { scaleY: -1, },
                            closed: { scaleY: 1 }
                        }}
                        transition={{ duration: 0.2 }}

                    >
                        <svg className='accordion-down-icon' version="1.1" height={'20px'} xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 330 330">
                            <path  id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                        </svg>
                    </motion.div>

                </Row>

            </motion.header>

            <AnimatePresence initial={false}>
                {
                    isOpen && (
                        <motion.section
                            key='content'
                            initial='collapsed'
                            animate='open'
                            exit='collapsed'
                            variants={{
                                open: { opacity: 1, height: 'auto' },
                                collapsed: { opacity: 0, height: 0 }
                            }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className={`accordion-content${contentClassName || ''}`}
                        >
                            {children}
                        </motion.section>
                    )
                }
            </AnimatePresence>
        </>
    )
}