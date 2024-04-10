import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, useScroll } from 'framer-motion'
import { useWindowSize } from "@uidotdev/usehooks"

import { Container } from "../../components/common/Container"
import { Image } from "../../components/common/Image"
import { Row } from "../../components/common/Row"
import { scrollTo } from "../../utils/helpers"

import { DropDown } from "../../components/common/DropDown"
import { Button } from "../../components/common/Button"

import breakpoint from '../../assets/styles/_variables.scss'
import { Accordion } from "../../components/common/Accordion"
import { Column } from "../../components/common/Column"

export const Navbar = (props) => {
    const [mobileMenu, toggleMobileMenu] = useState(false)
    const navigate = useNavigate()
    const [scrollY, setScrollY] = useState(window.scrollY)
    const { scrollYProgress } = useScroll()
    const size = useWindowSize()

    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => { setScrollY(window.scrollY) })
    }, [])

    const navLogo = (
        <Image
            name='logo.svg'            
            alt={'logo'}
            id='nav-logo'
            onClick={async () => {
                toggleMobileMenu(false)
                await navigate('/')
                scrollTo('', 'start')
            }}
        />
    )

    const renderDropDown = (item) => {
        if (size.width < parseInt(breakpoint.breakpoint_sm, 10)) {
            return (
                <div>
                    <Accordion i={item.title} justifyHeading={'flex-end'} heading={item.title} expanded={expanded} setExpanded={setExpanded}>
                        <Column>
                            {item.items.map((item2, index) => {
                                return (
                                    <Row key={index} justifyContent={'flex-end'}><span
                                        key={index}
                                        onClick={() => {
                                            navigate(item2.url)
                                            toggleMobileMenu(false)
                                            scrollTo('', 'start')
                                        }}
                                    >
                                        {item2.title}
                                    </span></Row>
                                )
                            })}
                        </Column>
                    </Accordion>
                </div>
            )
        } else {
            return (
                <DropDown id={item.id} title={item.title} items={item.items} />
            )
        }
    }

    const getNavItems = () => {
        let newItems = props.items

        if (size.width < parseInt(breakpoint.breakpoint_sm, 10)) {
            newItems = props.items.reduce((acc, section) => {
                return acc.concat(section.items)
            }, [])

            newItems = [{items: newItems}]            
        }

        return (
            <>
                {

                    newItems.map((section, index) => (
                        <div key={index}>
                            <ul className='nav-items'>
                                {section.items.map((item, index2) => {                                    
                                    return (
                                        <li
                                            key={index2}
                                            style={{ transitionDelay: index2 / 10 + 's', cursor: 'pointer' }}
                                            className='nav-item'
                                        >
                                            {item.type === 'pointer' && (
                                                // Render pointer component here
                                                <span
                                                    onClick={async () => {
                                                        await navigate(item.url)
                                                        scrollTo(item.section, 'center')
                                                        toggleMobileMenu(false)
                                                    }}

                                                >
                                                    {item.title}
                                                </span>
                                            )}
                                            {item.type === 'link' && (
                                                // Render link component here
                                                <a href={item.href}>{item.title}</a>
                                            )}
                                            {item.type === 'button' && (
                                                // Render button component here
                                                <button onClick={() => {
                                                    toggleMobileMenu(false)
                                                    item.onClick()
                                                }}>{item.title}</button>
                                            )}
                                            {item.type === 'dropdown' && (
                                                // Render button component here                                            
                                                renderDropDown(item)
                                            )}
                                            {item.type === 'action-link' && (
                                                // Render button component here                                                       
                                                <Button 
                                                    onClick={async () => {
                                                        toggleMobileMenu(false)
                                                        navigate(item.url)
                                                        scrollTo('', 'start')
                                                    }}
                                                    type={item.buttonType}
                                                >
                                                    {item.title}
                                                </Button>
                                            )}

                                        </li>
                                    )
                                })}
                            </ul>
                        </div>


                    ))

                }
            </>
        )
    }    
        



    const mobileMenuButton = (
        <button id="nav-menu-button" className={mobileMenu ? 'nav-menu-button-down' : ''} onClick={() => {
            toggleMobileMenu(!mobileMenu)
        }}>
        </button>
    )

    return (
        <>
            <nav>
                <Container>
                    <Row
                        justifyContent='space-between'
                        className='nav-content'
                    >
                        {navLogo}
                        {getNavItems()}
                        {mobileMenuButton /*visible only on breakpoint-xs */}
                    </Row>
                </Container>
                <div
                    className={`nav-mobile-menu${mobileMenu ? ' nav-mobile-menu-active' : ''}`}
                >

                    <Container>
                        {getNavItems()}
                    </Container>

                </div>


                <motion.div className='progress-bar' style={{ scaleX: scrollYProgress, opacity: scrollY > 0 ? 1 : 0 }} />


            </nav>
        </>
    )
}