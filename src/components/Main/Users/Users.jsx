import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserList from './UserList/UserList';
import './Users.scss';

const Users = (props) => {
	return (
		<Routes>
			<Route path='/' element={
				<UserList />
			} />
		</Routes>
	)
}

export default Users;