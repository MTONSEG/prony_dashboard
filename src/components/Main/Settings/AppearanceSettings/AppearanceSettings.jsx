import React, { useState } from 'react';
import './AppearanceSettings.scss';
import { settings } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import FormContainer from '../../../UI/Forms/FormContainer/FormContainer';
import ButtonsContainer from '../../../UI/Buttons/ButtonsContainer/ButtonsContainer';
import Button from '../../../UI/Buttons/Button/Button';
import UploadBlock from '../../Posts/CreatePost/UploadBlock/UploadBlock';
import ThemeBlock from './ThemeBlock/ThemeBlock';

const AppearanceSettings = props => {
	const [state, setState] = useState(settings.appearance);
	const [favicon, setFavicon] = useState(false);
	const [logo, setLogo] = useState(false);

	return (
		<div className='appearance'>
			<BigTitle className='appearance__title'>
				{state.title}
			</BigTitle>
			<FormContainer className='appearance__body'>
				<div className="appearance__upload-list">
					<UploadBlock title='Logo'
					drag={favicon}
					setDrag={setFavicon} />
					<UploadBlock title='Favicon'
					drag={logo}
					setDrag={setLogo} />
				</div>
				<ThemeBlock state={state.theme} />
				<ButtonsContainer className='appearance__btn-wrap'>
					<Button link='/'>Submit</Button>
				</ButtonsContainer>
			</FormContainer>
		</div>
	)
}

export default AppearanceSettings;