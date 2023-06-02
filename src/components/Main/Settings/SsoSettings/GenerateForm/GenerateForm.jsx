import React, { useRef, useState } from 'react';
import { CopyIcon } from '../../../../UI/SVGIcons/SVGIcons';
import { v1 } from 'uuid';
import './GenerateForm.scss';

const GenerateForm = ({ step, title, text, generate }) => {
	const [key, setKey] = useState(generateKey());
	const keyRef = useRef();
	const labelRef = useRef();

	function generateKey() {
		return v1().split('').slice(0, 23).join('');
	}

	const onGenerateClickHandler = () => { setKey(generateKey()) }
	const onCopyClickHandler = e => {
		navigator.clipboard.writeText(keyRef.current.textContent);
		labelRef.current.classList.add('active');
		
		setTimeout(() => {
			labelRef.current.classList.remove('active');
		}, 1000)
	}
	return (
		<div className='generate-form'>
			<span
				ref={labelRef}
				className='generate-form__label'>
				Copied to clipboard
			</span>
			<p
				ref={keyRef}
				className="generate-form__key">{key}</p>

			<button
				onClick={onCopyClickHandler}
				className="generate-form__copy">
				<CopyIcon />
			</button>

			<button
				onClick={onGenerateClickHandler}
				className='generate-form__btn'>
				Generate
			</button>
		</div>
	)
}

export default GenerateForm;