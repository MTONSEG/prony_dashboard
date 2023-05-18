import React, { useState } from 'react';
import InputBody from '../InputBody/InputBody';
import './CheckboxForm.scss';

const CheckboxForm = ({ text, title, value, checked, setChecked }) => {
	return (
		<label className='checkbox'>
			<input className="checkbox__input"
				type="radio"
				name={title}
				value={value}
				checked={checked === value}
				onChange={(e) => { setChecked(e.currentTarget.value) }}
			/>
			<div className='checkbox__custom'></div>
			<InputBody className={'checkbox__body'} title={title} text={text} />
		</label>
	);
}

export default CheckboxForm;