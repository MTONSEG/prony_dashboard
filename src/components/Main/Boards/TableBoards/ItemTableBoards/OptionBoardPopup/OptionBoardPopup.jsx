import React from 'react';
import { Link } from 'react-router-dom';
import closePopupIcon from '../../../../../../assets/icons/close-popup.svg';
import { EditPostIcon, EditSettingIcon, ListBoardIcon, RemoveBoardPostIcon, ViewBoardsPostsIcon, ViewIcon } from './Icons';

const OptionBoardPopup = ({ state, active, setActive }) => {
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
					<span>PubLinkc view</span>
				</Link>
				<Link
					className="popup-boards__item"
					onClick={onClickHandler}>
					<EditSettingIcon />
					<span>Edit board settings</span>
				</Link>
				<Link
					className="popup-boards__item"
					onClick={onClickHandler}>
					<ListBoardIcon />
					<span>Linkst board tags</span>
				</Link>
				<Link
					className="popup-boards__item"
					onClick={onClickHandler}>
					<EditPostIcon />
					<span>Edit board post</span>
				</Link>
				<Link
					className="popup-boards__item"
					onClick={onClickHandler}>
					<RemoveBoardPostIcon />
					<span>Delete board</span>
				</Link>
				<Link
					className="popup-boards__item"
					onClick={onClickHandler}>
					<ViewBoardsPostsIcon />
					<span>View posts</span>
				</Link>
			</div>
		</div>
	)
}

export default OptionBoardPopup;