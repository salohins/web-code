import { useState } from "react"

import { Column } from "../../components/common/Column"
import { Accordion } from "../../components/common/Accordion"
import { Row } from "../../components/common/Row"
import { Section } from "../../components/common/Section"
import { Container } from "../../components/common/Container"

export const FAQ = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <Section id='faq'>
            <Container>
                <Column>
                    <h2>FAQ</h2>
                    
                    <Row responsive alignItems='flex-start'>
                        <Column>
                            <Accordion justifyHeading={'space-between'} heading='heading' i={0} expanded={expanded} setExpanded={setExpanded}>
                                <p>This is Accordion Content</p>
                            </Accordion>
                            <Accordion justifyHeading={'space-between'} heading='heading' i={1} expanded={expanded} setExpanded={setExpanded}>
                                <p>This is Accordion Content</p>
                            </Accordion>
                            <Accordion justifyHeading={'space-between'} heading='heading' i={2} expanded={expanded} setExpanded={setExpanded}>
                                <p>This is Accordion Content</p>
                            </Accordion>
                            <Accordion justifyHeading={'space-between'} heading='heading' i={3} expanded={expanded} setExpanded={setExpanded}>
                                <p>This is Accordion Content</p>
                            </Accordion>


                        </Column>
                        <Column flex={{ desktop: 0.015 }} />
                        <Column>
                            <Accordion justifyHeading={'space-between'} heading='heading' i={4} expanded={expanded} setExpanded={setExpanded}>
                                <p>This is Accordion Content</p>
                            </Accordion>
                            <Accordion justifyHeading={'space-between'} heading='heading' i={5} expanded={expanded} setExpanded={setExpanded}>
                                <p>This is Accordion Content</p>
                            </Accordion>
                            <Accordion justifyHeading={'space-between'} heading='heading' i={6} expanded={expanded} setExpanded={setExpanded}>
                                <p>This is Accordion Content</p>
                            </Accordion>
                            <Accordion justifyHeading={'space-between'} heading='heading' i={7} expanded={expanded} setExpanded={setExpanded}>
                                <p>This is Accordion Content</p>
                            </Accordion>
                        </Column>
                    </Row>
                </Column>
            </Container>
        </Section>
    )
}