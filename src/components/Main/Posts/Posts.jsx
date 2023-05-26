import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { postList } from '../../../store';
import './Posts.scss';
import VotersPosts from './VotersPosts/VotersPosts';

const CreatePost = React.lazy(() => import('./CreatePost/CreatePost'));
const MainPosts = React.lazy(() => import('./MainPosts/MainPosts'));
const ViewPost = React.lazy(() => import('./ViewPost/ViewPost.jsx'));



const Posts = (props) => {
	let [state, setState] = useState(postList);

	return (
		<Routes>
			<Route path='/' element={
				<MainPosts state={state} />
			} />
			<Route path='/create-post' element={
				<CreatePost />
			} />
			<Route path='/view-post' element={
				<ViewPost />
			} />
			<Route path='/voters' element={
				<VotersPosts />
			} />
		</Routes>
	)
}

export default Posts;