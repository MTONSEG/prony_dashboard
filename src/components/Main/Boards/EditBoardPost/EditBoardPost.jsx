import React, { useState } from 'react';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import Button from '../../../UI/Buttons/Button/Button';
import ButtonsContainer from '../../../UI/Buttons/ButtonsContainer/ButtonsContainer';
import FormContainer from '../../../UI/Forms/FormContainer/FormContainer';
import './EditBoardPost.scss';
import EditBoardPostPopup from './EditBoardPostPopup/EditBoardPostPopup';
import ItemEditPost from './ItemEditPost/ItemEditPost';

const EditBoardPost = ({ boardsState }) => {
	let [editPostState, setEditPostState] = useState(boardsState.editPost);
	let [activePopup, setActivePopup] = useState(false);

	const activePopupHandler = () => { setActivePopup(!activePopup) }

	return (
		<main className="edit-post">
			<div className="edit-post__header">
				<BigTitle className={'edit-post__title'}>{editPostState.title}</BigTitle>
				<Button
					onClick={activePopupHandler}
				>
					{editPostState.addBtn}
				</Button>
			</div>


			<FormContainer className={'edit-post__form'}>
				<div className="edit-post__list">
					{
						editPostState.list.map((el, i) => (
							<ItemEditPost
								key={el.id}
								type={el.type}
								title={el.title}
								body={el.body}
								privacy={el.privacy}
								defaultPrivacy={el.defaultPrivacy}
								required={el.required}
							/>
						))
					}
				</div>
				<ButtonsContainer>
					<Button link='/boards' color='grey'>{editPostState.cancel}</Button>
					<Button link='../success' >{editPostState.submit}</Button>
				</ButtonsContainer>
			</FormContainer>

			<EditBoardPostPopup
				state={editPostState.popupList}
				active={activePopup}
				setActive={setActivePopup}
			/>
		</main>
	)
}

export default EditBoardPost;