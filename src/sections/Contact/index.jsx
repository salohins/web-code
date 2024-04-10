import { Row } from "../../components/common/Row"
import { Column } from "../../components/common/Column"
import { Input } from "../../components/common/Input"
import { Section } from "../../components/common/Section"
import { Button } from "../../components/common/Button"
import { Space } from "../../components/common/Space"
import { Container } from "../../components/common/Container"
import { ContentBlock } from "../../components/common/ContentBlock"

export const Contact = () => {
    return (
        <Section id='contact' background={'c_secondary'}>
            <Container>
                <Row responsive>
                    <Column justifyContent={'center'}>
                        <h2>
                            Contact
                        </h2>
                        <p>
                            Don't hesitate to contact us
                        </p>
                        <Space size={5} mobile />
                    </Column>

                    <Column justifyContent={'center'} flex={{ desktop: 0.7 }}>
                        <ContentBlock background={'c_primary'} color='white'>
                            <form>
                                <Row responsive>
                                    <Input type='text' label='Name' id='contact-name' />
                                    <Column flex={{ desktop: 0.025 }} />
                                    <Input type='text' label='Last Name' id='contact-lastname' />
                                </Row>

                                <Row responsive>
                                    <Input type='tel' label='Phone number' id='contact-number' />
                                    <Column flex={{ desktop: 0.025, mobile: 0 }} />
                                    <Input type='email' label='E-Mail' id='contact-email' />
                                </Row>

                                <Row>
                                    <Input type='textarea' label='Message' id='contact-message' />
                                </Row>
                                <Row justifyContent={'center'}>
                                    <Button type={'primary'}>Send</Button>
                                </Row>

                            </form>
                        </ContentBlock>
                    </Column>
                </Row>
            </Container>
        </Section>
    )
}