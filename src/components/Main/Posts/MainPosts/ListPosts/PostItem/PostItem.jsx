import React, { useState } from 'react';
import iconLikes from '../../../../../../assets/icons/like.svg';
import iconMess from '../../../../../../assets/icons/mess.svg';
import { OptionIcon } from '../../../../../UI/SVGIcons/SVGIcons';
import './PostItem.scss';

const PostItem = ({ photo, name, title, text, tags, likes, mess, time }) => {

	let [activeOption, setActiveOption] = useState();

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
					{
						tags.map((el, i) => (
							<div
								className='post-item__tag-item'
								key={i}
								style={{
									background: el.color
								}}
							>
								{el.title}
							</div>
						))
					}
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
			<div className="post-item__option-btn"
				onClick={() => { setActiveOption(!activeOption) }}>
				<OptionIcon className={'post-item__option-icon'} />
			</div>
		</li>
	)
}

export default PostItem;

