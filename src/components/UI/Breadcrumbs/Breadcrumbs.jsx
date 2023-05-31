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
						<Link to="" className='breadcrumbs__link'>Create post</Link>
					</>
				} />
				<Route path="/posts/edit-post" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/posts" className='breadcrumbs__link'>Posts</Link>
						<Link to="" className='breadcrumbs__link'>Edit post</Link>
					</>
				} />
				<Route path="/posts/view-post" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/posts" className='breadcrumbs__link'>Posts</Link>
						<Link to="" className='breadcrumbs__link'>Post view</Link>
					</>
				} />
				<Route path="/posts/voters" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/posts" className='breadcrumbs__link'>Posts</Link>
						<Link to="" className='breadcrumbs__link'>Post voters</Link>
					</>
				} />
				<Route path="/posts/import" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/posts" className='breadcrumbs__link'>Posts</Link>
						<Link to="" className='breadcrumbs__link'>Import post</Link>
					</>
				} />
				<Route path="/tags" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/tags" className='breadcrumbs__link'>Tags</Link>
					</>
				} />
				<Route path="/tags/edit" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/tags" className='breadcrumbs__link'>Tags</Link>
						<Link to="/tags/edit" className='breadcrumbs__link'>Edit Tags</Link>
					</>
				} />
				<Route path="/tags/add" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/tags" className='breadcrumbs__link'>Tags</Link>
						<Link to="/tags/add" className='breadcrumbs__link'>Add tags</Link>
					</>
				} />
				<Route path="/tags/replace" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/tags" className='breadcrumbs__link'>Tags</Link>
						<Link to="/tags/replace" className='breadcrumbs__link'>Replace tag</Link>
					</>
				} />
				<Route path="/users" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/users" className='breadcrumbs__link'>Users</Link>
					</>
				} />
				<Route path="/users/details" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/users" className='breadcrumbs__link'>Users</Link>
						<Link to="/users/details" className='breadcrumbs__link'>Users Details</Link>
					</>
				} />
				<Route path="/users/activities" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/users" className='breadcrumbs__link'>Users</Link>
						<Link to="/users/activities" className='breadcrumbs__link'>Activities</Link>
					</>
				} />
				<Route path="/users/segments" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/users" className='breadcrumbs__link'>Users</Link>
						<Link to="/users/segments" className='breadcrumbs__link'>User Segments</Link>
					</>
				} />
				<Route path="/users/segments/add" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/users" className='breadcrumbs__link'>Users</Link>
						<Link to="/users/add" className='breadcrumbs__link'>Add user segment</Link>
					</>
				} />
				<Route path="/users/segments/edit" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/users" className='breadcrumbs__link'>Users</Link>
						<Link to="/users/add" className='breadcrumbs__link'>Edit user segment</Link>
					</>
				} />
				<Route path="/statuses" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/statuses" className='breadcrumbs__link'>Statuses</Link>
					</>
				} />
				<Route path="/statuses/add" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/statuses" className='breadcrumbs__link'>Statuses</Link>
						<Link to="/statuses/add" className='breadcrumbs__link'>Add status</Link>
					</>
				} />
				<Route path="/statuses/edit" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/statuses" className='breadcrumbs__link'>Statuses</Link>
						<Link to="/statuses/add" className='breadcrumbs__link'>Edit status</Link>
					</>
				} />
				<Route path="/changelog" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/changelog" className='breadcrumbs__link'>Changelog</Link>
					</>
				} />
				<Route path="/changelog/add" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/changelog" className='breadcrumbs__link'>Changelog</Link>
						<Link to="/changelog/add" className='breadcrumbs__link'>Add record</Link>
					</>
				} />
				<Route path="/changelog/edit" element={
					<>
						<Link to="/" className='breadcrumbs__link'>Dashboard</Link>
						<Link to="/changelog" className='breadcrumbs__link'>Changelog</Link>
						<Link to="/changelog/edit" className='breadcrumbs__link'>edit record</Link>
					</>
				} />
			</Routes>
		</div>
	)
}

export default Breadcrumbs;