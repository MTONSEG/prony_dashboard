import React, { useState } from 'react';
import Button from '../../../../UI/Buttons/Button/Button';
import { RemoveBoardPostIcon } from '../../../Boards/TableBoards/ItemTableBoards/OptionBoardPopup/Icons';
import closePopup from '../../../../../assets/icons/close-popup.svg';
import './ItemVoterPosts.scss';

const ItemVoterPosts = ({ name, date, photo, textPopup }) => {

	let [modalActive, setModalActive] = useState(false)

	const onClickHandler = () => { setModalActive(!modalActive) }

	console.log(modalActive)

	return (
		<li className='item-voters'>
			<img
				src={photo}
				alt={name}
				className="item-voters__photo" />
			<p className="item-voters__name">{name}</p>
			<p className="item-voters__date">{date}</p>
			<button
				onClick={onClickHandler}
				className='item-voters__del-btn'
			>
				<RemoveBoardPostIcon className='item-voters__del-icon' />
			</button>
			<div className={modalActive
				? "item-voters__popup active"
				: "item-voters__popup"
			}>
				<img
					onClick={onClickHandler}
					src={closePopup}
					alt="close"
					className="item-voters__popup-close" />
				<p className="item-voters__popup-text">{textPopup}</p>
				<div className="item-voters__popup-btn-list">
					<Button
						onClick={onClickHandler}
						color='grey'>Cancel</Button>
					<Button
						onClick={onClickHandler}
						color='red'>Delete</Button>
				</div>
			</div>
		</li>
	)
}

export default ItemVoterPosts;