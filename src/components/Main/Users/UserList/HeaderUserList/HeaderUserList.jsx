import React from 'react';
import CheckboxForm from '../../../../UI/Forms/CheckboxForm/CheckboxForm';
import SelectCheckboxes from '../../../../UI/Forms/SelectCheckboxes/SelectCheckboxes';
import FilterSortPosts from '../../../Posts/MainPosts/FilterPosts/FilterSortPosts/FilterSortPosts';
import TagItem from '../../../Posts/MainPosts/FilterPosts/TagItem/TagItem';
import './HeaderUserList.scss';

const HeaderUserList = ({ state }) => {

	return (
		<div className='header-user-list'>
			<div className="header-user-list__select-list">
				<SelectCheckboxes
					className='header-user-list__select segments'
					state={state.segments} />
				<SelectCheckboxes
					className='header-user-list__select'
					state={state.mail} select={true} />
				<SelectCheckboxes
					className='header-user-list__select'
					state={state.lastName} />
				<SelectCheckboxes
					className='header-user-list__select'
					state={state.firstName} />
				<SelectCheckboxes
					className='header-user-list__select'
					state={state.role} />
				<CheckboxForm
					className='header-user-list__checkbox'
					title={state.banned.title}
					name={state.banned.title}
					checked={state.banned.value}
				/>
			</div>
			<div className="header-user-list__tags">
				<TagItem text='First name: 11' />
			</div>
			<FilterSortPosts
				sortList={state.sortList}
				showList={state.showList}
			/>
		</div>
	)
}

export default HeaderUserList;