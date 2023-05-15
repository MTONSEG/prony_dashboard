import React, {lazy, Suspense} from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import Loading from '../UI/Loading/Loading';

const Main = ({ state }) => {
	return (
		<main className="main">
			<Header />
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path="/" element={<div></div>} />
				</Routes>
			</Suspense>
		</main>
	)
}

export default Main;