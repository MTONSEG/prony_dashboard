import React, { useState } from 'react';
import './ReplaceTags.scss';
import { replaceTag } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import FormContainer from '../../../UI/Forms/FormContainer/FormContainer';
import ButtonsContainer from '../../../UI/Buttons/ButtonsContainer/ButtonsContainer';
import Button from '../../../UI/Buttons/Button/Button';
import SelectPostForm from '../../../UI/Forms/SelectPostForm/SelectPostForm';

const ReplaceTags = ({ add }) => {
	const [state, setState] = useState(replaceTag);

	return (
		<div className='replace-tag'>
			<BigTitle className='replace-tag__title'>{state.title}</BigTitle>
			<FormContainer className='replace-tag__body'>
				<p className="replace-tag__form-title">{state.formData.title}</p>
				<SelectPostForm state={state.formData.list} />
				<ButtonsContainer className='replace-tag__button-list'>
					<Button link='/tags' color="grey">Cancel</Button>
					<Button link='/tags'>Submit</Button>
				</ButtonsContainer>
			</FormContainer>
		</div>
	)
}

export default ReplaceTags;