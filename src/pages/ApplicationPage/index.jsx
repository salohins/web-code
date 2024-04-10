
import { Input } from "../../components/common/Input";
import { Row } from "../../components/common/Row";
import { Column } from "../../components/common/Column";
import { Section } from "../../components/common/Section";
import { Space } from "../../components/common/Space";
import { Container } from "../../components/common/Container";
import { ContentBlock } from "../../components/common/ContentBlock";

export const ApplicationPage = () => {
	return (
		<Section>
			<Container>
				<Column>
					<ContentBlock>
					{/* ApplicationPage page content */}
					<h2>Just one step away</h2>

					<Input type={'radio'} id={'application-choice'} label='Make a choice' initial={'true'} options={
						[
							{
								name: 'Yes',
								value: 'true'
							},
							{
								name: 'No',
								value: 'false'
							}
						]}
					/>
					<Space size={2} />
					<form>
						<Row responsive>
							<Input type={'text'} label='Name' id='application-name' />
							<Column flex={{ desktop: 0.025, mobile: 0.025 }} />
							<Input type={'text'} label='Last Name' id='application-lastname' />
						</Row>
						<Row responsive>
							<Input type={'date'} label='Birthdate' id='application-birthdate' />
							<Column flex={{ desktop: 0.025, mobile: 0 }} />
							<Input type={'select'} label='Select' id='application-select' options={[
								'option 1',
								'option 2',
								'option 3',
							]} />
						</Row>
						<Row responsive>
							<Input type='tel' label='Phone number' id='application-number' />
							<Column flex={{ desktop: 0.025, mobile: 0 }} />
							<Input type='email' label='E-Mail' id='application-email' />
						</Row>
						<Space size={2} />
						<Row>
							<Input id='range' type='range' min={0} max={10} step={1} label='range' />
						</Row>
						<Space size={2} />
						<Row responsive>
							<Input type='checkbox' id='confirmaton1'>
								<p>
									Confirmation 1
								</p>
							</Input>
							<Column flex={{ desktop: 0.025, mobile: 0 }} />
							<Input type='checkbox' id='confirmation2'>
								<p>
									Confirmation 2
									<a href='/'> Confirmation </a>
								</p>
							</Input>
						</Row>
						<Space size={2} />
						<Input label='Radio Block' id='radio-block' type='radio-block' columns={3} options={['option 1', 'option 2', 'option 3']} />


						<Row responsive>
							<Input type='switch' label={'Switch'} id='switch' />
							<Column flex={{ desktop: 0.025, mobile: 0 }} />
							<Input type='number' label='Number' id='number' />
						</Row>
					</form>
					</ContentBlock>
				</Column>
			</Container>
		</Section>
	);
}