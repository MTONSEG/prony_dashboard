import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EditTags from './EditTags/EditTags';
import MainTagScreen from './MainTagScreen/MainTagScreen';
import ReplaceTags from './ReplaceTags/ReplaceTags';
import './TagScreen.scss';

const TagScreen = (props) => {
	return (
		<Routes>
			<Route path='/' element={
				<MainTagScreen />
			} />
			<Route path='edit' element={
				<EditTags />
			} />
			<Route path='add' element={
				<EditTags add={true} />
			} />
			<Route path='replace' element={
				<ReplaceTags add={true} />
			} />
		</Routes>
	)
}

export default TagScreen;