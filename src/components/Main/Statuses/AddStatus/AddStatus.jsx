import React, { useState } from 'react';
import { addStatus } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import Button from '../../../UI/Buttons/Button/Button';
import ButtonsContainer from '../../../UI/Buttons/ButtonsContainer/ButtonsContainer';
import CheckboxForm from '../../../UI/Forms/CheckboxForm/CheckboxForm';
import FormContainer from '../../../UI/Forms/FormContainer/FormContainer';
import InputFrom from '../../../UI/Forms/InputFrom/InputFrom';
import ColorBullets from '../../TagScreen/ColorBullets/ColorBullets';
import PrivacyTags from '../../TagScreen/PrivacyTags/PrivacyTags';
import './AddStatus.scss';

const AddStatus = ({ edit }) => {
	const [state, setState] = useState(addStatus);
	const [nameValue, setNameValue] = useState('');
	const [privacyValue, setPrivacyValue] = useState('public');

	return (
		<div className='add-status'>
			<BigTitle className='add-status__title'>
				{edit ? state.titleEdit : state.title}
			</BigTitle>
			<FormContainer className='add-status__container'>
				<InputFrom
					title={state.name.title}
					name={state.name.title}
					ph={state.name.ph}
					value={nameValue}
					setValue={setNameValue}
					className='add-status__name'
				/>
				{state.checkboxes.map((el, i) => (
					<CheckboxForm
						key={i}
						title={el.title}
						name={el.title}
						className='add-status__checkbox'
						checked={el.value}
						text={el.text}
					/>
				))}

				<PrivacyTags
					className='add-status__privacy'
					state={state.privacy}
					privacy={privacyValue}
					setPrivacy={setPrivacyValue}
				/>
				<ColorBullets
					state={state}
					setState={setState}
				/>
				<ButtonsContainer className='add-status__button-list'>
					<Button link='/statuses' color="grey">Cancel</Button>
					<Button link='/statuses'>Submit</Button>
				</ButtonsContainer>
			</FormContainer>
		</div>
	)
}

export default AddStatus;