import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import Loading from '../UI/Loading/Loading';

const Main = ({ state }) => {
	return (
		<div className="main">
			<Header state={state.headerStore} />
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path="/" element={<div></div>} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default Main;