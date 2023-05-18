import React, { useState } from 'react';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import FormContainer from '../../../UI/Forms/FormContainer/FormContainer';
import InputFrom from '../../../UI/Forms/InputFrom/InputFrom';
import TextareaForm from '../../../UI/Forms/TextareaForm/TextareaForm';
import './CreateBoard.scss';

const CreateBoard = ({ boardsState }) => {
	let [createBoardState, setCreateBoardState] = useState(boardsState.create);

	let [inputNameValue, setInputNameValue] = useState('');
	let [inputUrlValue, setInputUrlValue] = useState(createBoardState.url.defaultValue);
	let [inputDescriptionValue, setInputDescriptionValue] = useState('');

	return (
		<main className="create-boards">
			<BigTitle className={'create-boards__title'}>{createBoardState.title}</BigTitle>

			<form className='create-boards__form'>
				<FormContainer className={'create-boards__form'}>
					<InputFrom
						className={'create-boards__input'}
						title={createBoardState.name.title}
						value={inputNameValue}
						setValue={setInputNameValue}
					/>
					<InputFrom
						className={'create-boards__input'}
						title={createBoardState.url.title}
						value={inputUrlValue}
						setValue={setInputUrlValue}
					/>
					<TextareaForm
						className={'create-boards__input'}
						title={createBoardState.description.title}
						value={inputDescriptionValue}
						setValue={setInputDescriptionValue}
					/>
				</FormContainer>
			</form>

		</main>
	)
}

export default CreateBoard;