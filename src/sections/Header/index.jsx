import { Column } from "../../components/common/Column"
import { Container } from "../../components/common/Container"
import { Row } from "../../components/common/Row"

export const Header = () => {
    return (
        <div id="header">
            <Container>
                <Row responsive>
                    <Column alignItems='flex-start' justifyContent='center'>
                        <h1>This is your header text</h1>
                    </Column>
                    <Column alignItems='center' justifyContent='center'>
                        <h2>Here is your header content</h2>
                    </Column>
                </Row>
            </Container>
        </div>
    )
}