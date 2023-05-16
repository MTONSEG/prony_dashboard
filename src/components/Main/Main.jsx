import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import Loading from '../UI/Loading/Loading';
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';
import './Main.scss';

const Dashboard = React.lazy(() => import('./Dashboard/Dashboard.jsx'));

const Main = ({ state }) => {
	return (
		<div className="main">
			<Header state={state.headerStore} />
			<Breadcrumbs/>
				<Routes>
					<Route path="/" element={<Dashboard/>} />
				</Routes>
		</div>
	)
}

export default Main;