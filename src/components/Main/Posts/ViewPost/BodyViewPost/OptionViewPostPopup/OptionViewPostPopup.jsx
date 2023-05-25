import React from 'react';
import { Link } from 'react-router-dom';
import closePopupIcon from '../../../../../../assets/icons/close-popup.svg';
import { AddVoterIcon, ChangePostIcon, EditPostIcon, ListVotersIcon, MergePostIcon, RemoveBoardPostIcon, ViewIcon } from '../../../../Boards/TableBoards/ItemTableBoards/OptionBoardPopup/Icons';
import './OptionViewPostPopup.scss';

const OptionViewPostPopup = ({ state, active, setActive }) => {
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
				<Link
					className="popup-boards__item"
					onClick={onClickHandler}>
					<ViewIcon />
					<span>Public view</span>
				</Link>
				<Link to='/boards/delete-board'
					className="popup-boards__item"
					onClick={onClickHandler}>
					<RemoveBoardPostIcon />
					<span>Delete post</span>
				</Link>
				<Link to='/boards/edit-board'
					className="popup-boards__item"
					onClick={onClickHandler}>
					<EditPostIcon />
					<span>Edit post</span>
				</Link>
				<Link
					className="popup-boards__item"
					onClick={onClickHandler}>
					<MergePostIcon />
					<span>Merge post</span>
				</Link>
				<Link to='/boards/edit-board-post'
					className="popup-boards__item"
					onClick={onClickHandler}>
					<ChangePostIcon />
					<span>Change status</span>
				</Link>
				<Link
					className="popup-boards__item"
					onClick={onClickHandler}>
					<AddVoterIcon />
					<span>Add voter</span>
				</Link>
				<Link
					className="popup-boards__item"
					onClick={onClickHandler}>
					<ListVotersIcon />
					<span>List voters</span>
				</Link>
			</div>
		</div>
	)
}

export default OptionViewPostPopup;