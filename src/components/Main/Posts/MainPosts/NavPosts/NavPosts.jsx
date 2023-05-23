import React, { useState } from 'react';
import SelectPostSort from '../FilterPosts/FilterSortPosts/SelectPostSort/SelectPostSort';
import NavPages from './NavPages/NavPages';
import './NavPosts.scss';


const NavPosts = ({ state, show }) => {
	return (
		<div className='footer-posts'>
			<NavPages className='footer-posts__nav' />
			{
				show
					? <div className="sort-posts__show">
						<p className="sort-posts__title">Show:</p>
						<SelectPostSort state={state.showList} />
						<p className="sort-posts__title">per page</p>
					</div>
					: <></>
			}
		</div>
	)
}

export default NavPosts;


