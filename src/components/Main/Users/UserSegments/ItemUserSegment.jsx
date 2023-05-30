import React, { useState } from 'react';
import { Reorder, useDragControls } from "framer-motion";
import { ReorderIcon } from "../../Boards/TableBoards/ItemTableBoards/Icon.jsx";
import { EditMessIcon } from '../../Posts/ViewPost/IconsViewPost/IconsViewPost.jsx';
import { RemoveBoardPostIcon } from '../../Boards/TableBoards/ItemTableBoards/OptionBoardPopup/Icons.jsx';

const ItemUserSegment = ({ item }) => {
	const dragControls = useDragControls();

	return (
		<Reorder.Item
			className='user-segments__item'
			value={item}
			id={item}
			dragListener={false}
			dragControls={dragControls}
		>
			<ReorderIcon dragControls={dragControls} className="user-segments__drag-icon" />
			<p className="user-segments__item-text name">
				{item.name}
			</p>
			<p className="user-segments__item-text">
				{item.representation}
			</p>
			<div className="user-segments__button-list">
				<EditMessIcon />
				<RemoveBoardPostIcon />
			</div>
		</Reorder.Item>
	)
}

export default ItemUserSegment;