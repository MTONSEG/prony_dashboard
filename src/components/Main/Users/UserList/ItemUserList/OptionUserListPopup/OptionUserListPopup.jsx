import React from 'react';
import { Link } from 'react-router-dom';
import closePopupIcon from '../../../../../../assets/icons/close-popup.svg';
import { AddVoterIcon, BanIcon, ChangePostIcon, EditPostIcon, ListVotersIcon, MergePostIcon, RemoveBoardPostIcon, RolesIcon, ViewIcon } from '../../../../Boards/TableBoards/ItemTableBoards/OptionBoardPopup/Icons';
import './OptionUserListPopup.scss';

const OptionUserListPopup = ({ state, active, setActive }) => {
	const onClickHandler = () => { setActive(!active) }

	return (
		<div className={`popup-boards ${active && 'active'}`}>
			<img
				src={closePopupIcon}
				alt="close"
				className="popup-boards__close-btn"
				onClick={onClickHandler}

			/>

			<div className="popup-boards__list">
				<Link to='/boards/delete-board'
					className="popup-boards__item"
					onClick={onClickHandler}>
					<RemoveBoardPostIcon />
					<span>Delete user</span>
				</Link>
				<Link to='/boards/edit-board-post'
					className="popup-boards__item"
					onClick={onClickHandler}>
					<ChangePostIcon />
					<span>Change user role</span>
				</Link>
				<Link
					className="popup-boards__item"
					onClick={onClickHandler}>
					<BanIcon />
					<span>Ban user</span>
				</Link>
				<Link
					className="popup-boards__item"
					onClick={onClickHandler}>
					<RolesIcon />
					<span>User roles</span>
				</Link>
			</div>
		</div>
	)
}

export default OptionUserListPopup;