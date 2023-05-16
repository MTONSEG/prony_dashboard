import React from 'react';
import ItemActivitiesStat from './ItemActivitiesStat/ItemActivitiesStat';
import './ActivitiesStat.scss';
import { Link } from 'react-router-dom';

const ActivitiesStat = ({ state, ...props }) => {

	let messages = state.list.map(el => (
		<ItemActivitiesStat
			key={el.id}
			photo={el.image}
			name={el.name}
			active={el.active}
			title={el.title}
			text={el.text}
			date={el.date}
		/>
	))

	return (
		<div className={props.className ? `${props.className} activities-stat` : 'activities-stat'}>
			<h1 className="activities-stat__title">{state.title}</h1>
			<ul className="activities-stat__list">
				{messages}
			</ul>
			<Link to="" className='activities-stat__more-btn'>
				{state.moreBtn}
			</Link>
		</div>
	)
}

export default ActivitiesStat;