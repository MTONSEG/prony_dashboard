import React, { useState } from 'react';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import NavPages from '../MainPosts/NavPosts/NavPages/NavPages';
import BodyViewPost from './BodyViewPost/BodyViewPost';
import MessagesViewPost from './MessagesViewPost/MessagesViewPost';
import './ViewPost.scss';

import { postView } from '../../../../store';


const ViewPost = props => {
	let [state, setState] = useState(postView);

	return (
		<main className='view-posts'>
			<BigTitle className='view-posts__title'>{state.title}</BigTitle>
			<div className="view-posts__body">
				<BodyViewPost state={state.viewPost} />
				<MessagesViewPost state={state.messages} />
				<NavPages />
			</div>
		</main>
	)
}

export default ViewPost;