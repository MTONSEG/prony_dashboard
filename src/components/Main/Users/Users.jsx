import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserActivities from './UserActivities/UserActivities';
import UserDetails from './UserDetails/UserDetails';
import UserList from './UserList/UserList';
import './Users.scss';

const Users = (props) => {
	return (
		<Routes>
			<Route path='/' element={
				<UserList />
			} />
			<Route path='details' element={
				<UserDetails />
			} />
			<Route path='activities' element={
				<UserActivities />
			} />
		</Routes>
	)
}

export default Users;