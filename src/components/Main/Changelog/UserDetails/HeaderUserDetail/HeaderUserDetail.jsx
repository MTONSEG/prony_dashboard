import React from 'react';
import './HeaderUserDetail.scss';
import postsIcon from '../../../../../assets/icons/edit-post.svg';
import likesIcon from '../../../../../assets/icons/like.svg';
import messIcon from '../../../../../assets/icons/mess.svg';
import { Link } from 'react-router-dom';

const HeaderUserDetail = ({ state }) => {
	const onMailClickHandler = e => {
		window.location.href = `mailto:${mail}`
		e.preventDefault();
	}

	return (
		<div className='header-user-detail'>
			<div className="header-user-detail__photo-wrap">
				<img src={state.photo} alt={state.name} className="header-user-detail__photo" />
				<p className="header-user-detail__status">{state.status}</p>
			</div>
			<div className="header-user-detail__info">
				<p className="header-user-detail__name">{state.name}</p>
				<Link to="#"
					className='header-user-detail__mail'
					onClick={onMailClickHandler}>
					{state.mail}
				</Link>
				<p className="header-user-detail__date">{state.date}</p>
			</div>
			<div className="header-user-detail__amount-list">
				<div className="header-user-detail__amount-item">
					<img src={postsIcon} alt='icon' className="header-user-detail__icon" />
					<span className='header-user-detail__title-num'>{state.postNum.title}</span>
					<span className='header-user-detail__num'>{state.postNum.value}</span>
				</div>
				<div className="header-user-detail__amount-item">
					<img src={likesIcon} alt='icon' className="header-user-detail__icon" />
					<span className='header-user-detail__title-num'>{state.likesNum.title}</span>
					<span className='header-user-detail__num'>{state.likesNum.value}</span>
				</div>
				<div className="header-user-detail__amount-item">
					<img src={messIcon} alt='icon' className="header-user-detail__icon" />
					<span className='header-user-detail__title-num'>{state.messNum.title}</span>
					<span className='header-user-detail__num'>{state.messNum.value}</span>
				</div>
			</div>
		</div>
	)
}

export default HeaderUserDetail;