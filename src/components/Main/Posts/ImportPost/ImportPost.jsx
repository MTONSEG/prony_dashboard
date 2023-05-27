import React, { useState } from 'react';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import FormContainer from '../../../UI/Forms/FormContainer/FormContainer'
import { importPost } from '../../../../store';
import './ImportPost.scss';
import SelectPostForm from '../../../UI/Forms/SelectPostForm/SelectPostForm';
import UploadBlock from '../CreatePost/UploadBlock/UploadBlock';
import ButtonsContainer from '../../../UI/Buttons/ButtonsContainer/ButtonsContainer';
import Button from '../../../UI/Buttons/Button/Button';
import image from '../../../../assets/images/comment__image.jpg'

const ImportPost = props => {
	let [state, setState] = useState(importPost);
	let [drag, setDrag] = useState(false);

	return (
		<main className='import-post'>
			<BigTitle className='import-post__title'>
				{state.title}
			</BigTitle>
			<FormContainer>
				<p className="import-post__form-title">
					{state.board.title}
				</p>
				<SelectPostForm
					state={state.board.list}
				/>
				<p className="import-post__form-title">
					{state.uploadTitle}
				</p>
				<UploadBlock
					image={image}
					drag={drag}
					setDrag={setDrag}
					className='import-post__upload' />
				<ButtonsContainer>
					<Button color="grey">Cancel</Button>
					<Button>Submit</Button>
				</ButtonsContainer>
			</FormContainer>
		</main>
	)
}

export default ImportPost;