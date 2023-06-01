import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GeneralSettings from './GeneralSettings /GeneralSettings ';
import './Settings.scss';

const Settings = props => {
	return (
		<Routes>
			<Route path='/general' element={
				<GeneralSettings />
			} />
		</Routes>
	)
}

export default Settings;