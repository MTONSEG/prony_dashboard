import React, { useState } from 'react';
import './Boards.scss';
import { boardScreen } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import Button from '../../../UI/Buttons/Button/Button';

const Boards = ({ state }) => {
	let [boardsState, setBoardsState] = useState(boardScreen);
	let [boardsList, setBoardsList] = useState(boardsState.table.list);

	return (
		<main className="boards">
			<div className="boards__header">
				<BigTitle className={'boards__title'}>{boardsState.title}</BigTitle>
				<Button className={'boards__btn'}>{boardsState.titleBtn}</Button>
			</div>

			<div className="boards__table table-boards">

			</div>

		</main>
	)
}

export default Boards;