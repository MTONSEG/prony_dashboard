import React, { useState } from 'react';
import { Reorder, useDragControls } from "framer-motion";
import { ReorderIcon } from "../../Boards/TableBoards/ItemTableBoards/Icon.jsx";
import { EditMessIcon } from '../../Posts/ViewPost/IconsViewPost/IconsViewPost.jsx';
import { RemoveBoardPostIcon } from '../../Boards/TableBoards/ItemTableBoards/OptionBoardPopup/Icons.jsx';
import { Link } from 'react-router-dom';

const ItemUserSegment = ({ item }) => {
	const dragControls = useDragControls();

	return (
		<Reorder.Item
			className='list-status__item'
			value={item}
			id={item.id}
			dragListener={false}
			dragControls={dragControls}
		>
			<ReorderIcon dragControls={dragControls} className="list-status__drag-icon" />
			<p className="list-status__item-text name">
				<span className='name__color'
					style={{
						background: item.color
					}}
				></span>
				<span className='name__text'>{item.name}</span>
			</p>
			<p
				style={item.votable ? { color: '#43A047' } : {}}
				className="list-status__item-text votable"
			>
				{item.votable ? 'yes' : 'no'}
			</p>
			<p
				style={item.roadmap ? { color: '#43A047' } : {}}
				className="list-status__item-text roadmap"
			>
				{item.roadmap ? 'yes' : 'no'}
			</p>
			<p
				style={!item.privacy ? { color: '#272557' } : {}}
				className="list-status__item-text privacy"
			>
				{item.privacy ? 'public' : 'private'}
			</p>
			<p
				style={{ background: item.color }}
				className="list-status__color-round"></p>
			<div className="list-status__button-list">
				<Link to='edit'><EditMessIcon /></Link>
				<Link><RemoveBoardPostIcon /></Link>
			</div>
		</Reorder.Item>
	)
}

export default ItemUserSegment;