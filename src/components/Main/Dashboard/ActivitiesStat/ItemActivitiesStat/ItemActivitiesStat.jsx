import React from 'react';
import './ItemActivitiesStat.scss';

const ItemActivitiesStat = ({ name, photo, active, title, text, date, ...props }) => {
	return (
		<li className={props.className ? `${props.className} item-activities-stat` : 'item-activities-stat'}>
			<div className="item-activities-stat__image-wrap">
				<img src={photo} alt={name} className="item-activities-stat__image" />
			</div>
			<div className="item-activities-stat__body">
				<p className="item-activities-stat__name">{name}</p>
				<p className="item-activities-stat__active">{active}</p>
				<h1 className="item-activities-stat__title">{title}</h1>
				{
					text
						? <p className="item-activities-stat__text">{text}</p>
						: <></>
				}
				<p className="item-activities-stat__date">{date}</p>
			</div>
		</li>
	)
}

export default ItemActivitiesStat; 