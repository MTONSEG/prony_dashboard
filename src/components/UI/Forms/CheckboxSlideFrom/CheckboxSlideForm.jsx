import React, { useState } from 'react';
import InputBody from '../InputBody/InputBody';
import './CheckboxSlideForm.scss';

const CheckboxSlideForm = ({ name, text, title, checked, className }) => {
	let [check, setCheck] = useState(checked);

	const onChangeHandler = () => { setCheck(!check) }

	return (
		<label className={className ? `${className} slide-checkbox` : 'slide-checkbox'}>
			<input className="slide-checkbox__input"
				type="checkbox"
				name={name}
				checked={check}
				onChange={onChangeHandler}
			/>
			<div className='slide-checkbox__custom'></div>
			<InputBody className={'slide-checkbox__body'} title={title} text={text} />
		</label>
	);
}

export default CheckboxSlideForm;