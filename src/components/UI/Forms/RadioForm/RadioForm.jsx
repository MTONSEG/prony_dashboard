import React from 'react';
import InputBody from '../InputBody/InputBody';
import './RadioForm.scss';

const RadioForm = ({name, text, title, value, checked, setChecked }) => {
	return (
		<label className='checkbox'>
			<input className="checkbox__input"
				type="radio"
				name={name}
				value={value}
				checked={checked === value}
				onChange={(e) => { setChecked(e.currentTarget.value) }}
			/>
			<div className='checkbox__custom'></div>
			<InputBody className={'checkbox__body'} title={title} text={text} />
		</label>
	);
}

export default RadioForm;