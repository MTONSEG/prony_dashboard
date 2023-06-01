import React, { useState } from 'react';
import './GeneralSettings .scss';
import { settings } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import FormContainer from '../../../UI/Forms/FormContainer/FormContainer';
import InputFrom from '../../../UI/Forms/InputFrom/InputFrom';
import ButtonsContainer from '../../../UI/Buttons/ButtonsContainer/ButtonsContainer';
import Button from '../../../UI/Buttons/Button/Button';
import RadioForm from '../../../UI/Forms/RadioForm/RadioForm';
import CheckboxForm from '../../../UI/Forms/CheckboxForm/CheckboxForm';

const GeneralSettings = ({ edit }) => {
	const [state, setState] = useState(settings.general);
	const [langValue, setLangValue] = useState('');
	const [nameValue, setNameValue] = useState('');

	const langList = state.lang.list.map(el => (
		<li key={el.id} className='settings-general__item'>
			<RadioForm
				className='settings-general__item-radio'
				name={state.lang.title}
				title={el.title}
				text={el.text}
				value={el.value}
				checked={langValue}
				setChecked={setLangValue}
			/>
			<img
				src={el.flag}
				alt='flag'
				className='settings-general__flag-image' />
		</li>
	))

	return (
		<div className='settings-general'>
			<BigTitle className='settings-general__title'>
				{state.title}
			</BigTitle>
			<FormContainer className='settings-general__body'>
				<InputFrom
					className='settings-general__name-form'
					title={state.name.title}
					ph={state.name.ph}
					value={nameValue}
					setValue={setNameValue} />
				<p className="settings-general__from-title">
					{state.lang.title}
				</p>
				<ul className="settings-general__list">
					{langList}
				</ul>

				<CheckboxForm
					className='settings-general__checkbox'
					name={state.show.title}
					title={state.show.title}
					checked={state.show.value} />
				<CheckboxForm
					className='settings-general__checkbox indexed'
					name={state.indexed.title}
					title={state.indexed.title}
					text={state.indexed.text}
					checked={state.indexed.value} />

				<ButtonsContainer className='settings-general__btn-wrap'>
					<Button link='/'>Submit</Button>
				</ButtonsContainer>
			</FormContainer>
		</div>
	)
}

export default GeneralSettings;