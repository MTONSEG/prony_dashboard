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

				<Route path="/boards/edit-board-post" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/boards" className='breadcrumbs__link'>Boards</Link>
						<Link to="" className='breadcrumbs__link'>Edit board post form</Link>
					</>
				} />
				<Route path="/posts" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/posts" className='breadcrumbs__link'>Posts</Link>
					</>
				} />
				<Route path="/posts/create-post" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/posts" className='breadcrumbs__link'>Posts</Link>
						<Link to="/posts/create-post" className='breadcrumbs__link'>Create post</Link>
					</>
				} />
				<Route path="/posts/view-post" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/posts" className='breadcrumbs__link'>Posts</Link>
						<Link to="/posts/view-post" className='breadcrumbs__link'>Post view</Link>
					</>
				} />
				<Route path="/posts/voters" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/posts" className='breadcrumbs__link'>Posts</Link>
						<Link to="/posts/view-post" className='breadcrumbs__link'>Post voters</Link>
					</>
				} />
			</Routes>

		</div>
	)
}

export default Breadcrumbs;