import React, { useState } from 'react';
import './ChangelogSettings.scss';
import { addLabel } from '../../../../store';

const ChangelogSettings = ({ edit }) => {
	const [state, setState] = useState(addLabel);

	return (
		<div className='settings-changelog'>
			<BigTitle className='settings-changelog__title'>
				{edit ? state.titleEdit : state.title}
			</BigTitle>
			<FormContainer className='settings-changelog__body'>
				<InputFrom
					className='settings-changelog__form-item'
					title={state.name.title}
					ph={state.name.ph}
					value={nameValue}
					setValue={setNameValue} />
				<ButtonsContainer>
					<Button link='/'>Submit</Button>
				</ButtonsContainer>
			</FormContainer>
		</div>
	)
}

export default ChangelogSettings;