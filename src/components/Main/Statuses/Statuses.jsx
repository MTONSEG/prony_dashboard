import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddStatus from './AddStatus/AddStatus';
import ListStatuses from './ListStatuses/ListStatuses';

const Statuses = (props) => {
	return (
		<Routes>
			<Route path='/' element={
				<ListStatuses />
			} />
			<Route path='/add' element={
				<AddStatus />
			} />

			<Route path='/edit' element={
				<AddStatus edit={true} />
			} />
		</Routes>
	)
}

export default Statuses;