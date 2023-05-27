import React, { useState } from 'react';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import Button from '../../../UI/Buttons/Button/Button';
import FilterPosts from './FilterPosts/FilterPosts';
import './MainPosts.scss';
import { ExportIcon, ImportIcon } from './MainPostSVGs/MainPostSVGs';
import ListPosts from './ListPosts/ListPosts';
import NavPosts from './NavPosts/NavPosts';
import SwopBtn from '../../../UI/Buttons/SwopBtn/SwopBtn';


const MainPosts = ({ state }) => {
	let [filtersState, setFilterState] = useState(state.filters);
	let [listPosts, setListPosts] = useState(state.posts);

	return (
		<main className='main-posts'>
			<div className="main-posts__header">
				<BigTitle>{state.title}</BigTitle>
				<div className="main-posts__header-buttonList">
					<SwopBtn
						className='main-posts__swop-btn'
						type='import'
						importLink='import' />
					<SwopBtn
						className='main-posts__swop-btn' />
					<Button link='create-post' className={'main-posts__create-btn'}>
						{state.titleBtn}
					</Button>
				</div>
			</div>
			<div className="main-posts__body">
				<FilterPosts
					state={filtersState}
					setState={setFilterState} />
				<ListPosts
					state={listPosts}
					setState={setListPosts} />
				<NavPosts state={filtersState} show={true} />
			</div>
		</main>
	)
}

export default MainPosts;