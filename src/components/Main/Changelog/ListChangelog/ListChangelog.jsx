import React, { useState } from 'react';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import { listChangelog } from '../../../../store';
import './ListChangelog.scss';
import NavPosts from '../../Posts/MainPosts/NavPosts/NavPosts';
import HeaderChangelogList from './HeaderChangelogList/HeaderChangelogList';
import ItemChangelogList from './ItemChangelogList/ItemChangelogList';

const ListChangelog = (props) => {
	const [state, setState] = useState(listChangelog)

	let users = state.list.map(el => (
		<ItemChangelogList
			key={el.id}
			title={el.title}
			time={el.time}
			labels={el.labels}
		/>
	))
	return (
		<div className='changelog-list'>
			<BigTitle className='changelog-list__title'>{state.title}</BigTitle>
			<div className="changelog-list__container">
				<HeaderChangelogList state={state} />
				<ul className="changelog-list__list">
					{users}
				</ul>
				<NavPosts />
			</div>

		</div>
	)
}

export default ListChangelog;