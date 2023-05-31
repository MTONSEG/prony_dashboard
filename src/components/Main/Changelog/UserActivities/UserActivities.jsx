import React, { useState } from 'react';
import './UserActivities.scss';
import { userActivity } from '../../../../store';
import NavPages from '../../Posts/MainPosts/NavPosts/NavPages/NavPages';
import BigTitle from '../../../UI/BigTitle/BigTitle';

const UserActivities = (props) => {
	const [state, setState] = useState(userActivity);

	return (
		<div className='user-activities'>
			<BigTitle className='user-activities__title'>{state.title}</BigTitle>
			<div className="user-activities__container">
				<ul className="user-activities__list">
					{state.list.map(el => (
						<li className="user-activities__item" key={el.id}>
							<img
								src={el.photo}
								alt={el.name}
								className="user-activities__photo" />
							<div className="user-activities__info">
								<p className="user-activities__name">{el.name}</p>
								<p className="user-activities__activity">{el.activity}</p>
							</div>
							<p className="user-activities__time">{el.time}</p>
							<div className="user-activities__text-wrap">
								<p className="user-activities__item-title">{el.title}</p>
								{el.text
									? <p className="user-activities__item-text">{el.text}</p>
									: <></>
								}
							</div>
						</li>
					))}
				</ul>
				<NavPages />
			</div>
		</div>
	)
}

export default UserActivities;