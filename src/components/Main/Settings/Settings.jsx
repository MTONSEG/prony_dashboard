import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppearanceSettings from './AppearanceSettings/AppearanceSettings';
import GeneralSettings from './GeneralSettings /GeneralSettings ';
import './Settings.scss';

const Settings = props => {
	return (
		<Routes>
			<Route path='/general' element={
				<GeneralSettings />
			} />
			<Route path='/appearance' element={
				<AppearanceSettings />
			} />
			{/* <Route path='/email' element={
				<EmailSettings />
			} />
			<Route path='/sso' element={
				<SsoSettings />
			} />
			<Route path='/domain' element={
				<DomainSettings />
			} /> */}
		</Routes>
	)
}

export default Settings;