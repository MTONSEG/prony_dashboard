import React from 'react';
import { Link } from 'react-router-dom';
import closePopupIcon from '../../../../../assets/icons/close-popup.svg';
import Button from '../../../../UI/Buttons/Button/Button';
import './EditBoardPostPopup.scss';

const EditBoardPostPopup = ({ state, active, setActive }) => {
	const onClickHandler = () => { setActive(!active) }

	return (
		<div className={`popup-edit-posts ${active && 'active'}`}>
			<img
				src={closePopupIcon}
				alt="close"
				className="popup-edit-posts__close-btn"
				onClick={onClickHandler}

			/>

			<div className="popup-edit-posts__list">
				{
					state.map(el => (
						<Link
							className="popup-edit-posts__item"
						
						>
							<p className="popup-edit-posts__title">
								{el.title}
							</p>
							<p className="popup-edit-posts__subtitle">
								{el.subtitle}
							</p>
						</Link>
					))
				}
			</div>
			<Button className="popup-edit-posts__btn">
				Submit
			</Button>
		</div>
	)
}

export default EditBoardPostPopup;