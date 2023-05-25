import React, { useState } from 'react';
import './ListPosts.scss';
import PostItem from './PostItem/PostItem';





const ListPosts = ({ state, setState }) => {
	return (
		<ul className='posts-list'>
			{
				state.map(el => (
					<PostItem
						key={el.id}
						photo={el.photo}
						name={el.name}
						title={el.title}
						text={el.text}
						tags={el.tags}
						likes={el.likeNum}
						mess={el.messNum}
						time={el.mess}
					/>
				))
			}
		</ul>
	)
}

export default ListPosts;

