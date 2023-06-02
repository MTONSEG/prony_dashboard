import React, { useState } from 'react';
import { Reorder, useDragControls } from "framer-motion";
import { ReorderIcon } from "../../Boards/TableBoards/ItemTableBoards/Icon.jsx";
import { EditMessIcon } from '../../Posts/ViewPost/IconsViewPost/IconsViewPost.jsx';
import { RemoveBoardPostIcon } from '../../Boards/TableBoards/ItemTableBoards/OptionBoardPopup/Icons.jsx';
import TagItem from '../../Posts/MainPosts/FilterPosts/TagItem/TagItem.jsx';
import { Link } from 'react-router-dom';

const ItemLabelsChangelog = ({ item }) => {
	const dragControls = useDragControls();

	return (
		<Reorder.Item
			className='list-labels__item'
			value={item}
			id={item.id}
			dragListener={false}
			dragControls={dragControls}
		>
			<ReorderIcon dragControls={dragControls} className="list-labels__drag-icon" />
			<p className='list-labels__label'>
				<TagItem
					text={item.title}
					style={{
						background: item.bg,
						color: item.color
					}}
				/>
			</p>
			<p
				style={{ background: item.bg }}
				className="list-labels__color-round"></p>
			<div className="list-labels__button-list">
				<Link to='edit'><EditMessIcon /></Link>
				<Link><RemoveBoardPostIcon /></Link>
			</div>
		</Reorder.Item>
	)
}

export default ItemLabelsChangelog;