import React, { useState } from 'react';
import './Boards.scss';
import { boardScreen } from '../../../store';
import { Route, Routes } from 'react-router-dom';
import BoardsList from './BoardsList/BoardsList';
import CreateBoard from './CreateBoard/CreateBoard';
import EditBoard from './EditBoard/EditBoard';
import DeleteBoard from './DeleteBoard/DeleteBoard';
import EditBoardPost from './EditBoardPost/EditBoardPost';

const Boards = ({ state }) => {
	let [boardsState, setBoardsState] = useState(boardScreen);

	return (
		<Routes>
			<Route path='/*' element={
				<BoardsList boardsState={boardsState} />
			} />
			<Route path='create-board' element={
				<CreateBoard boardsState={boardsState} setBoardsState={setBoardsState} />
			} />
			<Route path='edit-board' element={
				<EditBoard boardsState={boardsState} setBoardsState={setBoardsState} />
			} />

			<Route path='delete-board' element={
				<DeleteBoard boardsState={boardsState} setBoardsState={setBoardsState} />
			} />

			<Route path='edit-board-post' element={
				<EditBoardPost boardsState={boardsState} setBoardsState={setBoardsState} />
			} />
		</Routes>
	)
}

export default Boards;