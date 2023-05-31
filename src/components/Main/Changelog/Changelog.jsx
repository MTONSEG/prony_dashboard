import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Changelog.scss';
import ListChangelog from './ListChangelog/ListChangelog';
import AddRecordChangelog from './AddRecordChangelog/AddRecordChangelog';

const Changelog = (props) => {
	return (
		<Routes>
			<Route path='/' element={
				<ListChangelog/>
			} />
			<Route path='add' element={
				<AddRecordChangelog />
			} />
		</Routes>
	)
}

export default Changelog;