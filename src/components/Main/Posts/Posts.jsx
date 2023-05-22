import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { postList } from '../../../store';
import MainPosts from './MainPosts/MainPosts';
import './Posts.scss';


const Posts = (props) => {
	let [state, setState] = useState(postList);

	return (
		<Routes>
			<Route path='/' element={
				<MainPosts state={state} />
			} />
		</Routes>
	)
}

export default Posts;