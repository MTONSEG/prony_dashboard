import React, { useState } from 'react';
import './ChangelogSettings.scss';
import { settings } from '../../../../store';
import FormContainer from '../../../UI/Forms/FormContainer/FormContainer';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import PrivacyTags from '../../TagScreen/PrivacyTags/PrivacyTags';
import RadioForm from '../../../UI/Forms/RadioForm/RadioForm';
import CheckboxForm from '../../../UI/Forms/CheckboxForm/CheckboxForm';

const ChangelogSettings = props => {
	const [state, setState] = useState(settings.changelog);
	const [privacyValue, setPrivacyValue] = useState('public');

	return (
		<div className='settings-changelog'>
			<BigTitle className='settings-changelog__title'>
				{state.title}
			</BigTitle>
			<FormContainer className='settings-changelog__body'>
				<div className="settings-changelog__privacy">
					<p className="settings-changelog__privacy-title">
						{state.privacy.title}
					</p>
					{
						state.privacy.list.map(el => (
							<RadioForm
								className='settings-changelog__privacy-radio'
								key={el.id}
								name={state.privacy.title}
								title={el.title}
								text={el.text}
								value={el.value}
								checked={privacyValue}
								setChecked={setPrivacyValue} />
						))
					}
				</div>
				<CheckboxForm
					title={state.indexed.title}
					text={state.indexed.text}
					checked={state.indexed.value}
				/>
			</FormContainer>
		</div>
	)
}

export default ChangelogSettings;