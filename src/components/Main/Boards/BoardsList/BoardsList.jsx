import React, { useState } from 'react';
import './BoardsList.scss';
import { boardScreen } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import Button from '../../../UI/Buttons/Button/Button';
import TableBoards from '../TableBoards/TableBoards';
import MessageBoards from '../TableBoards/MessageBoards/MessageBoards';
import { Route, Routes } from 'react-router-dom';

const BoardsList = ({ boardsState}) => {
	return (
		<main className="list-boards">
			<div className="list-boards__header">
				<BigTitle className={'list-boards__title'}>{boardsState.title}</BigTitle>
				<Button link='create-board' className={'list-boards__btn'}>{boardsState.titleBtn}</Button>
			</div>

			<Routes>
				<Route path='success' element={<MessageBoards text={boardsState.table.doneMess} />} />
				<Route path='error' element={<MessageBoards error={boardsState.table.errorMess} />} />
			</Routes>

			<TableBoards state={boardsState.table} />

		</main>
	)
}

export default BoardsList;