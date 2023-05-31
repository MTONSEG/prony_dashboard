import React from 'react';
import SelectCheckboxes from '../../../../UI/Forms/SelectCheckboxes/SelectCheckboxes';
import FilterSortPosts from '../../../Posts/MainPosts/FilterPosts/FilterSortPosts/FilterSortPosts';
import TagItem from '../../../Posts/MainPosts/FilterPosts/TagItem/TagItem';
import './HeaderChangelogList.scss';

const HeaderChangelogList = ({ state }) => {

	return (
		<div className='header-changelog-list'>
			<div className="header-changelog-list__select-list">
				<SelectCheckboxes
					className='header-changelog-list__select labels'
					state={state.labels} />
				<SelectCheckboxes
					className='header-changelog-list__select'
					state={state.time} />
			</div>
			<div className="header-changelog-list__tags">
				<TagItem text='Admin' />
			</div>
			<div className='header-changelog-list__titles'>
				<p className="header-changelog-list__form-title title">Title</p>
				<p className="header-changelog-list__form-title time">Publish time</p>
				<p className="header-changelog-list__form-title label">Labels</p>
				<FilterSortPosts
					showList={state.showList}
				/>
			</div>
		</div>
	)
}

export default HeaderChangelogList;