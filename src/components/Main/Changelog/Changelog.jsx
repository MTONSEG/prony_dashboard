import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Changelog.scss';
import ListChangelog from './ListChangelog/ListChangelog';

const Changelog = (props) => {
	return (
		<Routes>
			<Route path='/' element={
				<ListChangelog/>
			} />
		</Routes>
	)
}

export default Changelog;