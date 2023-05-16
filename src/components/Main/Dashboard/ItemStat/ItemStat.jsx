import React from 'react';
import './ItemStat.scss';

const ItemStat = ({ title, value, ...props }) => {
	return (
		<li className={props.className ? `${props.className} item-stat` : 'item-stat'}>
			<p className="item-stat__title">{title}</p>
			<p className="item-stat__value">{value}</p>
		</li>
	)
}

export default ItemStat;