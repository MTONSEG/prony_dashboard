import React, { useState } from 'react';
import './EditTags.scss';
import { editTag } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import FormContainer from '../../../UI/Forms/FormContainer/FormContainer';
import ColorBullets from '../ColorBullets/ColorBullets';
import PrivacyTags from '../PrivacyTags/PrivacyTags';
import InputFrom from '../../../UI/Forms/InputFrom/InputFrom';

const EditTags = ({ add }) => {
	const [state, setState] = useState(editTag);

	let value = add ? '' : state.name.value;

	const [nameValue, setNameValue] = useState(value);

	return (
		<div className='edit-tag'>
			<BigTitle className='edit-tag__title'>{state.title}</BigTitle>
			<FormContainer className='edit-tag__body'>
				<InputFrom
					className='edit-tag__form-title'
					value={nameValue}
					setValue={setNameValue}
					name={state.name.title}
					title={state.name.title}
					ph={state.name.ph}
				/>

				<ColorBullets
					state={state}
					setState={setState}
				/>
				<PrivacyTags />
			</FormContainer>
		</div>
	)
}

export default EditTags;