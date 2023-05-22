import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';
import './Main.scss';

const Dashboard = React.lazy(() => import('./Dashboard/Dashboard.jsx'));
const Boards = React.lazy(() => import('./Boards/Boards.jsx'));
const Posts = React.lazy(() => import('./Posts/Posts.jsx'));

const Main = ({ state }) => {
	return (
		<div className="main">
			<Header state={state.headerStore} />
			<Breadcrumbs />
			<Suspense fallback={<p>Loading</p>}>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/boards/*" element={<Boards />} />
					<Route path="/posts/*" element={<Posts />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default Main;