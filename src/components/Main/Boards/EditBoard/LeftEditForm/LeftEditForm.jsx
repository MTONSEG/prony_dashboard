import React, { useState } from 'react';
import InputFrom from '../../../../UI/Forms/InputFrom/InputFrom';
import TextareaForm from '../../../../UI/Forms/TextareaForm/TextareaForm';
import './LeftEditForm.scss';

const LeftEditForm = ({ state, className }) => {
	let [inputNameValue, setInputNameValue] = useState(state.name.value);
	let [inputUrlValue, setInputUrlValue] = useState(state.url.value);
	let [inputDescriptionValue, setInputDescriptionValue] = useState(state.description.value);

	return (
		<div className={className
			? `${className} left-edit-from`
			: `left-edit-from`
		}>
			<InputFrom
				className={'left-edit-from__input'}
				title={state.name.title}
				value={inputNameValue}
				setValue={setInputNameValue}
			/>
			<InputFrom
				className={'left-edit-from__input'}
				title={state.url.title}
				value={inputUrlValue}
				setValue={setInputUrlValue}
			/>
			<TextareaForm
				className={'left-edit-from__textarea'}
				title={state.description.title}
				value={inputDescriptionValue}
				setValue={setInputDescriptionValue}
			/>
		</div>
	)
}

export default LeftEditForm;