import React, { useState } from 'react';
import './FilterSortPosts.scss';
import SelectPostSort from './SelectPostSort/SelectPostSort';


const FilterSortPosts = ({ state }) => {
	return (
		<div className='sort-posts'>
			<div className="sort-posts__sort">
				<p className="sort-posts__title">Sort by:</p>
				<SelectPostSort state={state.sortList} />
			</div>
			<div className="sort-posts__show">
				<p className="sort-posts__title">Show:</p>
				<SelectPostSort state={state.showList} />
				<p className="sort-posts__title">per page</p>
			</div>
		</div>
	)
}

export default FilterSortPosts;