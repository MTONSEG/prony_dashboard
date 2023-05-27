import React, { useState } from 'react';
import iconLikes from '../../../../../../assets/icons/like.svg';
import iconMess from '../../../../../../assets/icons/mess.svg';
import OptionBtn from '../../../../../UI/Buttons/OptionBtn/OptionBtn';
import OptionPostItemPopup from './OptionPostItemPopup/OptionPostItemPopup';
import './PostItem.scss';

const PostItem = ({ photo, name, title, text, tags, likes, mess, time }) => {

	let [activeOption, setActiveOption] = useState(false);

	let tagList = tags.map((el, i) => (
		<li className='post-item__tag-item'
			key={i}
			style={{
				background: el.color
			}}
		>
			{el.title}
		</li>
	))

	return (
		<li className='post-item'>
			<div className="post-item__image-wrap">
				<img src={photo} alt="name" className="post-item__photo" />
				<p className="post-item__name">{name}</p>
			</div>
			<div className="post-item__body">
				<h1 className="post-item__title">
					{title}
					<span>{time}</span>
				</h1>
				<p className="post-item__text"> {text} </p>
				<ul className="post-item__tag-list">
					{tagList}
				</ul>
			</div>
			<div className="post-item__stat">
				<div className="post-item__stat-item">
					<img src={iconLikes} alt="likes" className="post-item__stat-icon" />
					<span className="post-item__stat-num">{likes}</span>
				</div>

				<div className="post-item__stat-item">
					<img src={iconMess} alt="posts" className="post-item__stat-icon" />
					<span className="post-item__stat-num">{mess}</span>
				</div>
			</div>
			<OptionBtn
				className="post-item__option-btn"
				active={activeOption}
				setActive={setActiveOption} />
			<OptionPostItemPopup
				active={activeOption}
				setActive={setActiveOption} />
		</li>
	)
}

export default PostItem;

