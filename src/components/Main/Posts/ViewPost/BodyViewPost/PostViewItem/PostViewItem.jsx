import React, { useState } from 'react';
import Tag from '../../../../../UI/Tags/Tag';
import './PostViewItem.scss';

const PostViewItem = ({
	className,
	photo,
	name,
	title,
	time,
	status,
	text,
	image,
	tags
}) => {
	let tagList = tags.map((el, i) => (<Tag key={i} title={el.title} color={el.color} />))

	return (
		<div className={`viewing-post ${className ? className : ''}`}>
			<div className="viewing-post__image-wrap">
				<img src={photo} alt={name} />
				<p className="viewing-post__name">{name}</p>
			</div>
			<div className="viewing-post__body">
				<p className="viewing-post__title">
					{title}
					<span>{time}</span>
				</p>
				<div className="viewing-post__status">{status}</div>
				<div className="viewing-post__text">{text}</div>
				<img src={image} alt="" className="viewing-post__image-to-text" />
				<ul className="viewing-post__tags">{tagList}</ul>
			</div>
		</div>
	)
}

export default PostViewItem;