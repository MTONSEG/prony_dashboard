import React, { useState } from 'react';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import HeaderUserList from './HeaderUserList/HeaderUserList';
import { userList } from '../../../../store';
import './UserList.scss';
import NavPosts from '../../Posts/MainPosts/NavPosts/NavPosts';
import ItemUserList from './ItemUserList/ItemUserList';

const UserList = (props) => {
	const [state, setState] = useState(userList)

	let users = state.users.map(el => (
		<ItemUserList
			key={el.id}
			photo={el.photo}
			name={el.name}
			mail={el.mail}
			date={el.date}
			postNum={el.postNum}
			likesNum={el.likesNum}
			messNum={el.messNum}
			status={el.status}
		/>
	))
	return (
		<div className='user-list'>
			<BigTitle className='user-list__title'>{state.title}</BigTitle>
			<div className="user-list__container">
				<HeaderUserList state={state} />
				<ul className="user-list__list">
					{users}
				</ul>
				<NavPosts />
			</div>

		</div>
	)
}

export default UserList;