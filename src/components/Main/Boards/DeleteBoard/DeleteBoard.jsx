import React, { useState } from 'react';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import Button from '../../../UI/Buttons/Button/Button';
import ButtonsContainer from '../../../UI/Buttons/ButtonsContainer/ButtonsContainer';
import FormContainer from '../../../UI/Forms/FormContainer/FormContainer';
import InputFrom from '../../../UI/Forms/InputFrom/InputFrom';
import './DeleteBoard.scss';

const DeleteBoard = ({ boardsState }) => {
	let [deleteBoardState, setCreateBoardState] = useState(boardsState.delete);

	let [inputNameValue, setInputNameValue] = useState('');

	return (
		<main className="delete-boards">
			<BigTitle className={'delete-boards__title'}>{deleteBoardState.title}</BigTitle>

			<FormContainer className={'delete-boards__form'}>
				<p className="delete-boards__text">
					{deleteBoardState.text}
				</p>
				<InputFrom
					className={'delete-boards__input'}
					title={deleteBoardState.inputTitle}
					value={inputNameValue}
					setValue={setInputNameValue}
				/>
				<ButtonsContainer>
					<Button link='/boards' color='grey'>{deleteBoardState.cancel}</Button>
					<Button link='/boards' color='red' >{deleteBoardState.delete}</Button>
				</ButtonsContainer>
			</FormContainer>


		</main>
	)
}

export default DeleteBoard;