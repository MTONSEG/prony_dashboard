import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ChangelogSettings from './ChangelogSettings/ChangelogSettings';
import './Settings.scss';

const Settings = props => {
	return (
		<Routes>
			<Route path='/' element={
				<ChangelogSettings />
			} />
		</Routes>
	)
}

export default Settings;