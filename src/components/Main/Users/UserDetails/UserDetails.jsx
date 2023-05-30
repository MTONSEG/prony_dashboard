import React, { useState } from 'react';
import './UserDetails.scss';
import { userDetails } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import HeaderUserDetail from './HeaderUserDetail/HeaderUserDetail';
import ItemUserDetail from './ItemUserDetail/ItemUserDetail';

const UserDetails = (props) => {
	const [state, setState] = useState(userDetails);
	const [activeTab, setActiveTab] = useState('posts');

	let postsList = state.posts.list.map(el => (
		<ItemUserDetail
			key={el.id}
			num={el.num}
			title={el.title}
			date={el.date}
		/>
	));
	let votesList = state.votes.list.map(el => (
		<ItemUserDetail
			key={el.id}
			title={el.title}
			date={el.date}
		/>
	));

	const onPostsClickHandler = () => { setActiveTab('posts') }
	const onVotesClickHandler = () => { setActiveTab('votes') }

	return (
		<div className='user-detail'>
			<BigTitle className='user-detail__title'>{state.title}</BigTitle>
			<div className="user-detail__container">
				<HeaderUserDetail state={state} />
				<div className="user-detail__body">
					<div className="user-detail__tab-list">
						<div
							onClick={onPostsClickHandler}
							className={activeTab === 'posts'
								? "user-detail__tab active"
								: "user-detail__tab"}>
							{state.posts.title}
						</div>
						<div
							onClick={onVotesClickHandler}
							className={activeTab === 'votes'
								? "user-detail__tab active"
								: "user-detail__tab"}>
							{state.votes.title}
						</div>
						<div
							style={activeTab === 'posts'
								? { left: '0' }
								: { left: 'calc(50% + 10px)' }
							}
							className="user-detail__tab-indicator"></div>
					</div>
					<div className="user-detail__list-wrap">
						<ul className={activeTab === 'posts'
							? 'user-detail__list posts active'
							: 'user-detail__list posts'
						}>
							{postsList}
						</ul>
						<ul className={activeTab === 'votes'
							? 'user-detail__list votes active'
							: 'user-detail__list votes'
						}>
							{votesList}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserDetails;