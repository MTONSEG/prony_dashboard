import React, { useState } from 'react';
import './Boards.scss';
import { boardScreen } from '../../../store';
import BigTitle from '../../UI/BigTitle/BigTitle';
import Button from '../../UI/Buttons/Button/Button';
import TableBoards from './TableBoards/TableBoards';
import MessageBoards from './TableBoards/MessageBoards/MessageBoards';
import { Route, Routes } from 'react-router-dom';

const Boards = ({ state }) => {
	let [boardsState, setBoardsState] = useState(boardScreen);
	let [error, setError] = useState(false)

	return (
		<main className="boards">
			<div className="boards__header">
				<BigTitle className={'boards__title'}>{boardsState.title}</BigTitle>
				<Button className={'boards__btn'}>{boardsState.titleBtn}</Button>
			</div>

			<Routes>
				<Route path='success' element={<MessageBoards text={boardsState.table.doneMess} />} />
				<Route path='error' element={<MessageBoards error={boardsState.table.errorMess} />} />
			</Routes>

			<TableBoards state={boardsState.table} />

		</main>
	)
}

export default Boards;