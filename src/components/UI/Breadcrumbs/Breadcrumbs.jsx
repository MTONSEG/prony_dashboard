import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './Breadcrumbs.scss';

const Breadcrumbs = ({ state, children }) => {
	return (
		<div className="breadcrumbs">
			<Routes>
				<Route path="/" element={
					<>
						<Link className='breadcrumbs__link'>Dashboard</Link>
					</>
				} />
				<Route path="/boards" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/boards" className='breadcrumbs__link'>Boards</Link>
					</>
				} />

				<Route path="/boards/create-board" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/boards" className='breadcrumbs__link'>Boards</Link>
						<Link to="" className='breadcrumbs__link'>Create board</Link>
					</>
				} />
				<Route path="/boards/edit-board" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/boards" className='breadcrumbs__link'>Boards</Link>
						<Link to="" className='breadcrumbs__link'>Edit board</Link>
					</>
				} />
			</Routes>

		</div>
	)
}

export default Breadcrumbs;