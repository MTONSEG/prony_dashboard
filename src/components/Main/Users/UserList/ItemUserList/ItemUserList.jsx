import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemUserList.scss';
import postsIcon from '../../../../../assets/icons/edit-post.svg';
import likesIcon from '../../../../../assets/icons/like.svg';
import messIcon from '../../../../../assets/icons/mess.svg';
import OptionBtn from '../../../../UI/Buttons/OptionBtn/OptionBtn';
import OptionUserListPopup from './OptionUserListPopup/OptionUserListPopup';

const ItemUserList = ({ photo, name, mail, date, status, postNum, likesNum, messNum }) => {
	const [activeOption, setActiveOption] = useState(false);

	const onMailClickHandler = e => {
		window.location.href = `mailto:${mail}`
		e.preventDefault();
	}

	return (
		<li className='item-user-list'>
			<img src={photo} alt={name} className="item-user-list__photo" />
			<div className="item-user-list__info">
				<p className="item-user-list__name">{name}</p>
				<Link to="#"
					className='item-user-list__mail'
					onClick={onMailClickHandler}>
					{mail}
				</Link>
				<p className="item-user-list__date">{date}</p>
			</div>
			<div className="item-user-list__amount-list">
				<div className="item-user-list__amount-item">
					<img src={postsIcon} alt='icon' className="item-user-list__icon" />
					<span>{postNum}</span>
				</div>
				<div className="item-user-list__amount-item">
					<img src={likesIcon} alt='icon' className="item-user-list__icon" />
					<span>{likesNum}</span>
				</div>
				<div className="item-user-list__amount-item">
					<img src={messIcon} alt='icon' className="item-user-list__icon" />
					<span>{messNum}</span>
				</div>
			</div>
			<p className={`item-user-list__status 
			${status === 'Admin' ? '' : 'member'}`}>{status}</p>
			<OptionBtn
				className='item-user-list__option-btn'
				active={activeOption}
				setActive={setActiveOption} />
			<OptionUserListPopup
				active={activeOption}
				setActive={setActiveOption} />
		</li>
	)
}

export default ItemUserList;