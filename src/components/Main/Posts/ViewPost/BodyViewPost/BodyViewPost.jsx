import React, { useState } from 'react';
import Button from '../../../../UI/Buttons/Button/Button';
import OptionBtn from '../../../../UI/Buttons/OptionBtn/OptionBtn';
import RadioForm from '../../../../UI/Forms/RadioForm/RadioForm';
import TextareaForm from '../../../../UI/Forms/TextareaForm/TextareaForm';
import UploadBlock from '../../CreatePost/UploadBlock/UploadBlock';
import FilterSortPosts from '../../MainPosts/FilterPosts/FilterSortPosts/FilterSortPosts';
import { BigLikeMessIcon } from '../IconsViewPost/IconsViewPost';
import './BodyViewPost.scss';
import OptionViewPostPopup from './OptionViewPostPopup/OptionViewPostPopup';
import PostViewItem from './PostViewItem/PostViewItem';

const BodyViewPost = ({ state, className }) => {
	const [drag, setDrag] = useState(false);
	const [privacy, setPrivacy] = useState('public');
	const [activeOption, setActiveOption] = useState(false);

	return (
		<div className={`view-post-body ${className ? className : ''}`}>
			<div className="view-post-body__header">
				<div className="view-post-body__likes">
					<BigLikeMessIcon className='view-post-body__likes-icon' />
					<p className="view-post-body__likes-num">
						{state.amountLikes}
					</p>
				</div>
				<OptionBtn active={activeOption} setActive={setActiveOption} />
			</div>
			<PostViewItem
				className='view-post-body__post-wrap'
				photo={state.photo}
				name={state.name}
				title={state.title}
				time={state.time}
				status={state.status}
				text={state.text}
				image={state.image}
				tags={state.tags}
			/>
			<TextareaForm
				className='view-post-body__textarea'
				ph={state.placeholder}
			/>
			<div className="view-post-body__upload-wrap">
				<UploadBlock
					className={'view-post-body__upload'}
					title={state.upload.title}
					image={state.upload.image}
					drag={drag}
					setDrag={setDrag}
				/>
				<div className="view-post-body__upload-right">
					{
						state.privacy.list.map((el, i) => <RadioForm
							key={i}
							name={state.privacy.title}
							title={el.title}
							value={el.value}
							checked={privacy}
							setChecked={setPrivacy}
							className={'view-post-body__radio'}
						/>)
					}

					<Button className='view-post-body__comment-btn'>Comment</Button>
				</div>

			</div>
			<FilterSortPosts
				sortList={state.sortList}
			/>
			<OptionViewPostPopup active={activeOption} setActive={setActiveOption} />
		</div>
	)
}

export default BodyViewPost;