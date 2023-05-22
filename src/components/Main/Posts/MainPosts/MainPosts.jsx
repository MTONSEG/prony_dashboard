import React, { useState } from 'react';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import Button from '../../../UI/Buttons/Button/Button';
import FilterPosts from './FilterPosts/FilterPosts';
import './MainPosts.scss';
import { ExportIcon, ImportIcon } from './MainPostSVGs/MainPostSVGs';


const MainPosts = ({ state }) => {
	let [filtersState, setFilterState] = useState(state.filters);
	let [listPosts, setListPosts] = useState(state.posts);
	
	return (
		<main className='main-posts'>
			<div className="main-posts__header">
				<BigTitle>{state.title}</BigTitle>
				<div className="main-posts__header-buttonList">
					<div className='main-posts__swop-btn import'>
						<ImportIcon />
						<p>Import</p>
					</div>
					<div className='main-posts__swop-btn export'>
						<ExportIcon />
						<p>Export</p>
					</div>
					<Button className={'main-posts__create-btn'}>
						{state.titleBtn}
					</Button>
				</div>
			</div>
			<div className="main-posts__body">
				<FilterPosts
					state={filtersState}
					setState={setFilterState} />
			</div>
		</main>
	)
}

export default MainPosts;