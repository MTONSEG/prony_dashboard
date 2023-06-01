import React, { useState } from 'react';
import InputBody from '../InputBody/InputBody';
import './CheckboxForm.scss';

const CheckboxForm = ({ name, text, title, checked, className}) => {
	let [check, setCheck] = useState(checked);

	const onChangeHandler = () => { setCheck(!check) }

	return (
		<label className={className ? `${className} checkbox` : 'checkbox'}>
			<input className="checkbox__input"
				type="checkbox"
				name={name}
				checked={check}
				onChange={onChangeHandler}
			/>
			<div className='checkbox__custom'></div>
			<InputBody
				className={'checkbox__body'}
				title={title}
				text={text} />
		</label>
	);
}

export default CheckboxForm;