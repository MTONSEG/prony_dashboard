import React, { useState } from 'react';
import { voters } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import SwopBtn from '../../../UI/Buttons/SwopBtn/SwopBtn';
import NavPosts from '../MainPosts/NavPosts/NavPosts';
import ItemVoterPosts from './ItemVoterPosts/ItemVoterPosts';
import './VotersPosts.scss';

const VotersPosts = props => {
	let [state, setState] = useState(voters);


	let listItems = state.list.map(el => (
		<ItemVoterPosts
			key={el.id}
			name={el.name}
			date={el.date}
			photo={el.photo}
			textPopup={state.popupText}
		/>
	))
	return (
		<main className='voters'>
			<div className="voters__header">
				<BigTitle className='voters__title'>{state.title}</BigTitle>
				<p className="voters__subtitle">{state.subtitle}</p>
				<SwopBtn className='voters__swop-btn' />
				
			</div>
			<ul className="voters__list">
				{listItems}
			</ul>
			<NavPosts />
		</main>
	)
}

export default VotersPosts;