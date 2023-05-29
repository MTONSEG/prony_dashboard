import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainTagScreen from './MainTagScreen/MainTagScreen';
import './TagScreen.scss';

const TagScreen = (props) => {
	return (
		<Routes>
			<Route path='/' element={
				<MainTagScreen />
			} />
		</Routes>
	)
}

export default TagScreen;