import React, { useState } from 'react';
import SearchForm from '../../../../UI/Forms/SearchForm/SearchForm';
import SelectCheckboxes from '../../../../UI/Forms/SelectCheckboxes/SelectCheckboxes';
import FilterSortPosts from './FilterSortPosts/FilterSortPosts';
import TagItem from './TagItem/TagItem';
import './FilterPosts.scss';


const FilterPosts = ({ state, setState }) => {
	let [searchValue, setSearchValue] = useState('');

	return (
		<div className='filter-posts'>
			<div className="filter-posts__selects">
				<SearchForm
					className={'filter-posts__search'}
					name="Search"
					value={searchValue}
					setValue={setSearchValue}
					ph="Search all posts"
				/>
				<SelectCheckboxes
					className='filter-posts__tags'
					state={state.tags}
				/>
				<SelectCheckboxes
					className='filter-posts__boards'
					state={state.boards}
				/>
				<SelectCheckboxes
					className='filter-posts__statuses'
					state={state.statuses}
				/>
				<SelectCheckboxes
					className='filter-posts__owners'
					state={state.owners}
				/>
				<SelectCheckboxes
					className='filter-posts__authors'
					state={state.authors}
				/>
				<SelectCheckboxes
					className='filter-posts__created'
					state={state.created}
				/>
				<SelectCheckboxes
					className='filter-posts__segments'
					state={state.segments}
				/>
				<SelectCheckboxes
					className='filter-posts__approved'
					state={state.approved}
				/>
			</div>
			<div className="filter-posts__tag-list">
				<TagItem text='Tag: Tagname1' />
				<TagItem text='Author: Name 1' />
			</div>
			<FilterSortPosts state={state} />
		</div>
	)
}

export default FilterPosts;