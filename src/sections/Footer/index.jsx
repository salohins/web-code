
import { useNavigate } from "react-router-dom"
import { scrollTo } from "../../utils/helpers"
import { Row } from "../../components/common/Row"
import { Column } from "../../components/common/Column"

import { Container } from "../../components/common/Container"
import { Image } from "../../components/common/Image"
import { Link } from "../../components/common/Link"


export const Footer = () => {
    const navigate = useNavigate()

    return (
        <footer>
            <Container>

                <Row>
                    <Column alignItems='flex-start'>
                        <Image
                            name='logo.svg'
                            alt={'logo'}
                            id='footer-logo'
                            onClick={async () => {
                                await navigate('/')
                                scrollTo('', 'start')
                            }}
                        />
                    </Column>

                </Row>
                <Row responsive>
                    <Column>
                        <h4>Get Connected</h4>
                        <ul>
                            <li><Link href='/link'>link</Link></li>
                            <li><Link href='/link'>link</Link></li>
                            <li><Link href='/link'>link</Link></li>
                            <li><Link href='/link'>link</Link></li>    
                        </ul>
                    </Column>
                    <Column>
                        <h4>Resources</h4>
                        <ul>
                            <li><Link href='/link'>link</Link></li>
                            <li><Link href='/link'>link</Link></li>
                            <li><Link href='/link'>link</Link></li>
                            <li><Link href='/link'>link</Link></li>
                        </ul>
                    </Column>
                    <Column>
                        <h4>Get Connected</h4>
                        <ul>
                            <li><Link href='/link'>link</Link></li>
                            <li><Link href='/link'>link</Link></li>
                            <li><Link href='/link'>link</Link></li>
                            <li><Link href='/link'>link</Link></li>
                        </ul>
                    </Column>
                    <Column>
                        <h4>Social</h4>
                        <Row alignItems={'flex-start'} className={'social-icons'}>
                            <Column flex={{ desktop: .2, mobile: 1 }}>
                                <a className="link" href='/facebook'>
                                    <Image name={'facebook.svg'} width={'30px'} height={'30px'} />
                                </a>
                            </Column>

                            <Column flex={{ desktop: .2, mobile: 1 }}>
                                <a className="link" href='/instagram'>
                                    <Image name={'instagram.svg'} width={'30px'} height={'30px'} />
                                </a>
                            </Column>
                        </Row>
                    </Column>
                </Row>
                <hr />
                <Row>
                    <Column>
                        <Row>
                            <Image id={'contact-icon'} name={'phone.svg'} width={'20px'} height={'20px'} />
                            <span> +41 767 331 548</span>
                        </Row>

                    </Column>
                    <Column alignItems={'flex-end'} justifyContent={'center'} flex={{ desktop: 3, mobile: 1 }}>
                        <span>© Company 2024</span>
                    </Column>
                </Row>


            </Container>
        </footer>
    )
}