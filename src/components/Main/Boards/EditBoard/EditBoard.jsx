import React, { useState } from 'react';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import Button from '../../../UI/Buttons/Button/Button';
import ButtonsContainer from '../../../UI/Buttons/ButtonsContainer/ButtonsContainer';
import FormContainer from '../../../UI/Forms/FormContainer/FormContainer';
import './EditBoard.scss';
import LeftEditForm from './LeftEditForm/LeftEditForm';
import RightEditForm from './RightEditForm/RightEditForm';

const EditBoard = ({ boardsState }) => {
	let [editBoardState, setEditBoardState] = useState(boardsState.edit);

	return (
		<main className="edit-boards">
			<BigTitle className={'edit-boards__title'}>{editBoardState.title}</BigTitle>

			<FormContainer className={'edit-boards__form'}>
				<div className="edit-boards__body">
					<LeftEditForm
						className='edit-boards__form-left'
						state={editBoardState} />
					<RightEditForm
						className='edit-boards__form-right'
						state={editBoardState} />
				</div>

				<ButtonsContainer>
					<Button link='/boards' color='grey'>{editBoardState.cancel}</Button>
					<Button link='../success' >{editBoardState.submit}</Button>
				</ButtonsContainer>
			</FormContainer>


		</main>
	)
}

export default EditBoard;