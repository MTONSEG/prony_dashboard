import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddUserSegments from './AddUserSegments/AddUserSegments';
import UserActivities from './UserActivities/UserActivities';
import UserDetails from './UserDetails/UserDetails';
import UserList from './UserList/UserList';
import './Users.scss';
import UserSegments from './UserSegments/UserSegments';

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
			<Route path='segments' element={
				<UserSegments />
			} />
			<Route path='segments/add' element={
				<AddUserSegments />
			} />
			<Route path='segments/edit' element={
				<AddUserSegments edit={true} />
			} />
		</Routes>
	)
}

export default Users;