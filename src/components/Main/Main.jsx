import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';
import './Main.scss';

const Dashboard = React.lazy(() => import('./Dashboard/Dashboard.jsx'));
const Boards = React.lazy(() => import('./Boards/Boards.jsx'));
const Posts = React.lazy(() => import('./Posts/Posts.jsx'));
const TagsScreen = React.lazy(() => import('./TagScreen/TagScreen.jsx'));
const Users = React.lazy(() => import('./Users/Users.jsx'));
const Statuses = React.lazy(() => import('./Statuses/Statuses.jsx'));
const Changelog = React.lazy(() => import('./Changelog/Changelog.jsx'));
const Settings = React.lazy(() => import('./Settings/Settings.jsx'));

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
					<Route path="/tags/*" element={<TagsScreen />} />
					<Route path="/users/*" element={<Users />} />
					<Route path="/statuses/*" element={<Statuses />} />
					<Route path="/changelog/*" element={<Changelog />} />
					<Route path="/settings/*" element={<Settings />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default Main;