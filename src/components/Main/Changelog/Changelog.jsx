import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Changelog.scss';
import ListChangelog from './ListChangelog/ListChangelog';
import AddRecordChangelog from './AddRecordChangelog/AddRecordChangelog';
import LabelsChangelog from './LabelsChangelog/LabelsChangelog';
import AddLabelChangelog from './AddLabelChangelog/AddLabelChangelog';

const Changelog = props => {
	return (
		<Routes>
			<Route path='/' element={
				<ListChangelog />
			} />
			<Route path='add' element={
				<AddRecordChangelog />
			} />
			<Route path='edit' element={
				<AddRecordChangelog edit={true} />
			} />
			<Route path='labels' element={
				<LabelsChangelog />
			} />
			<Route path='labels/add' element={
				<AddLabelChangelog />
			} />
			<Route path='labels/edit' element={
				<AddLabelChangelog edit={true} />
			} />
		</Routes>
	)
}

export default Changelog;