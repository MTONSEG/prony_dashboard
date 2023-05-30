import React from 'react';
import './ItemUserDetail.scss';
import { Link } from 'react-router-dom';

const ItemUserDetail = ({ num, title, date }) => {

	return (
		<li className='item-user-detail'>
			{num
				? <p className="item-user-detail__num">{num}</p>
				: <></>
			}
			<p className="item-user-detail__title">{title}</p>
			<p className="item-user-detail__date">{date}</p>
		</li>
	)
}

export default ItemUserDetail;