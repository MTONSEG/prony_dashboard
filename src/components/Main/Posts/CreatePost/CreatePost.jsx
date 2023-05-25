import React, { useState } from 'react';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import './CreatePost.scss';
import { createPost } from '../../../../store';
import FormContainer from '../../../UI/Forms/FormContainer/FormContainer';
import SelectPostForm from '../../../UI/Forms/SelectPostForm/SelectPostForm';
import InputFrom from '../../../UI/Forms/InputFrom/InputFrom';
import TextareaForm from '../../../UI/Forms/TextareaForm/TextareaForm';
import Button from '../../../UI/Buttons/Button/Button';
import ButtonsContainer from '../../../UI/Buttons/ButtonsContainer/ButtonsContainer';
import UploadBlock from './UploadBlock/UploadBlock';

const CreatePost = props => {
	let [state, setState] = useState(createPost);
	let [titleVal, setTitleVal] = useState();
	let [detailVal, setDetailVal] = useState();
	const [drag, setDrag] = useState(false);

	return (
		<main className='create-posts'>
			<BigTitle className='create-posts__title'>{state.title}</BigTitle>
			<FormContainer className='create-posts__form'>

				<p className="create-posts__form-title important">{state.boardName.title}</p>
				<SelectPostForm
					state={state.boardName.list}
				/>

				<p className="create-posts__form-title important">{state.postTitle.title}</p>
				<InputFrom
					className='create-posts__input-wrap'
					value={titleVal}
					setValue={setTitleVal}
					ph={state.postTitle.placeholder} />

				<p className="create-posts__form-title">{state.detailes.title}</p>
				<TextareaForm
					className='create-posts__input-wrap'
					value={detailVal}
					setValue={setDetailVal}
					ph={state.detailes.placeholder} />

				<UploadBlock
					className='create-posts__upload'
					title={state.upload.title}
					image={state.upload.image}
					drag={drag}
					setDrag={setDrag}
				/>

				<p className="create-posts__form-title important">{state.owner.title}</p>
				<SelectPostForm
					state={state.owner.list}
				/>

				<p className="create-posts__form-title important">{state.status.title}</p>
				<SelectPostForm
					state={state.status.list}
				/>

				<ButtonsContainer className={'create-posts__button-list'}>
					<Button link='../' color='grey'>Cancel</Button>
					<Button link='../'>Submit</Button>
				</ButtonsContainer>
			</FormContainer>
		</main>
	)
}

export default CreatePost;