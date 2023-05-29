import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import EditTags from './EditTags/EditTags';
import MainTagScreen from './MainTagScreen/MainTagScreen';
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
		</Routes>
	)
}

export default TagScreen;