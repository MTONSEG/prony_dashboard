import React, { useState } from 'react';
import './AddLabelChangelog.scss';
import { addLabel } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import FormContainer from '../../../UI/Forms/FormContainer/FormContainer';
import ButtonsContainer from '../../../UI/Buttons/ButtonsContainer/ButtonsContainer';
import Button from '../../../UI/Buttons/Button/Button';
import InputFrom from '../../../UI/Forms/InputFrom/InputFrom';
import ColorBullets from '../../TagScreen/ColorBullets/ColorBullets';

const AddLabelChangelog = ({ edit }) => {
	const [state, setState] = useState(addLabel);
	const [nameValue, setNameValue] = useState('');

	return (
		<div className='add-label'>
			<BigTitle className='add-label__title'>
				{edit ? state.titleEdit : state.title}
			</BigTitle>
			<FormContainer className='add-label__body'>
				<InputFrom
					className='add-label__form-item'
					title={state.name.title}
					ph={state.name.ph}
					value={nameValue}
					setValue={setNameValue} />
				<ColorBullets
					state={state}
					setState={setState} />
				<ButtonsContainer>
					<Button link='/changelog' color="grey">Cancel</Button>
					<Button link='/changelog'>Submit</Button>
				</ButtonsContainer>
			</FormContainer>
		</div>
	)
}

export default AddLabelChangelog;