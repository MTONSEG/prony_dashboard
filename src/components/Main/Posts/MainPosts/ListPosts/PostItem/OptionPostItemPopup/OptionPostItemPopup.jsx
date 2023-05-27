import React from 'react';
import { Link } from 'react-router-dom';
import closePopupIcon from '../../../../../../../assets/icons/close-popup.svg';
import { AddVoterIcon, ChangePostIcon, EditPostIcon, ListVotersIcon, MergePostIcon, RemoveBoardPostIcon, ViewBoardsPostsIcon, ViewIcon } from '../../../../../Boards/TableBoards/ItemTableBoards/OptionBoardPopup/Icons';
import './OptionPostItemPopup.scss';

const OptionPostItemPopup = ({ state, active, setActive }) => {
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
				<Link to='/posts/edit-post'
					className="popup-boards__item"
					onClick={onClickHandler}>
					<EditPostIcon />
					<span>Edit post</span>
				</Link>
				<Link
					className="popup-boards__item"
					onClick={onClickHandler}>
					<RemoveBoardPostIcon />
					<span>Delete post</span>
				</Link>
				<Link
					className="popup-boards__item"
					onClick={onClickHandler}>
					<MergePostIcon />
					<span>Merge post</span>
				</Link>
				<Link to='/posts/view-post'
					className="popup-boards__item"
					onClick={onClickHandler}>
					<ViewBoardsPostsIcon />
					<span>View posts</span>
				</Link>
			</div>
		</div>
	)
}

export default OptionPostItemPopup;