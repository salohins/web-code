import { Column } from "../../components/common/Column"
import { Container } from "../../components/common/Container"
import { List } from "../../components/common/List"
import { Row } from "../../components/common/Row"
import { Section } from "../../components/common/Section"
import { Space } from "../../components/common/Space"
import { ContentBlock } from "../../components/common/ContentBlock"
import { OnTop } from "../../components/common/OnTop"
import { OnBottom } from "../../components/common/OnBottom"

export const About = () => {
    return (
        <Section id="about" background={'c_primary'} color={'primary_color'}>
            <Container>

                <Row>

                    <Column flex={{ mobile: 1, desktop: .5 }} alignItems='flex-start' justifyContent='flex-start'>
                        <ContentBlock background='c_secondary' color='black'>
                            <h2>About Us</h2>
                            <p>
                                Dieser Textblock gibt einen kurzen Überblick über Ihr Unternehmen.
                                Teilen Sie hier Ihre Philosophie, Vision oder Ihr Mantra.
                            </p>


                        </ContentBlock>
                        
                    </Column>

                </Row>

                <Space size={2} />
                <Row>
                    <List bulletSize={'30px'} bulletIcon={'checkbox.svg'} points={[
                        'list item 1',
                        'list item 2',
                        'list item 3'
                    ]} />
                </Row>
            </Container>
            <OnBottom left={'50%'} bottom={'-77px'}>
                            <ContentBlock background={'c_danger'} color={'white'}>
                                <Row justifyContent={'center'}>
                                    <span>1</span>

                                </Row>
                            </ContentBlock>
                        </OnBottom>
        </Section>
    )
}