import React, { useState } from 'react';
import './AppearanceSettings.scss';
import { settings } from '../../../../../store';
import BigTitle from '../../../../UI/BigTitle/BigTitle';
import FormContainer from '../../../../UI/Forms/FormContainer/FormContainer';
import ButtonsContainer from '../../../../UI/Buttons/ButtonsContainer/ButtonsContainer';
import Button from '../../../../UI/Buttons/Button/Button';
import UploadBlock from '../../../Posts/CreatePost/UploadBlock/UploadBlock';

const AppearanceSettings = ({ edit }) => {
	const [state, setState] = useState(settings.appearance);

	return (
		<div className='appearance'>
			<BigTitle className='appearance__title'>
				{state.title}
			</BigTitle>
			<FormContainer className='appearance__body'>
				<div className="appearance__upload-list">
					<UploadBlock />
					<UploadBlock />
				</div>
				<ThemeBlock />
				<ButtonsContainer className='appearance__btn-wrap'>
					<Button link='/'>Submit</Button>
				</ButtonsContainer>
			</FormContainer>
		</div>
	)
}

export default AppearanceSettings;