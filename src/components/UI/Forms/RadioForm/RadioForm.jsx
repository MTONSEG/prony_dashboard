import React from 'react';
import InputBody from '../InputBody/InputBody';
import './RadioForm.scss';

const RadioForm = ({name, text, title, value, checked, setChecked }) => {
	return (
		<label className='radio'>
			<input className="radio__input"
				type="radio"
				name={name}
				value={value}
				checked={checked === value}
				onChange={(e) => { setChecked(e.currentTarget.value) }}
			/>
			<div className='radio__custom'></div>
			<InputBody className={'radio__body'} title={title} text={text} />
		</label>
	);
}

export default RadioForm;