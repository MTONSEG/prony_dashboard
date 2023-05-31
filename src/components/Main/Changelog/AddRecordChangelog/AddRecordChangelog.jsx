import React, { useState } from 'react';
import './AddRecordChangelog.scss';
import { addRecord } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import FormContainer from '../../../UI/Forms/FormContainer/FormContainer';
import ButtonsContainer from '../../../UI/Buttons/ButtonsContainer/ButtonsContainer';
import Button from '../../../UI/Buttons/Button/Button';
import InputFrom from '../../../UI/Forms/InputFrom/InputFrom';
import TextareaForm from '../../../UI/Forms/TextareaForm/TextareaForm';
import UploadBlock from '../../Posts/CreatePost/UploadBlock/UploadBlock';
import SelectPostForm from '../../../UI/Forms/SelectPostForm/SelectPostForm';
import TagItem from '../../Posts/MainPosts/FilterPosts/TagItem/TagItem';

const AddRecordChangelog = ({ edit }) => {
	const [state, setState] = useState(addRecord);
	const [nameValue, setNameValue] = useState('');
	const [detailValue, setDetailValue] = useState('');
	const [drag, setDrag] = useState(false);


	return (
		<div className='add-changelog'>
			<BigTitle className='add-changelog__title'>
				{edit ? state.titleEdit : state.title}
			</BigTitle>
			<FormContainer className='add-changelog__body'>
				<InputFrom
					className='add-changelog__form-item'
					title={state.name.title}
					ph={state.name.ph}
					value={nameValue}
					setValue={setNameValue} />
				<TextareaForm
					className='add-changelog__form-item'
					title={state.details.title}
					ph={state.details.ph}
					value={detailValue}
					setValue={setDetailValue} />
				<UploadBlock
					className='add-changelog__form-item'
					title={state.upload.title}
					image={state.upload.image}
					drag={drag}
					setDrag={setDrag}
				/>
				<div className='add-changelog__form-item'>
					<p className="add-changelog__label-title input-title">
						{state.labels.title}
					</p>
					<SelectPostForm state={state.labels.list} />
					<ul className="add-changelog__label-list">
						{state.labels.items.map((el, i) => (
							<TagItem
								text={el.title}
								style={{
									background: el.bg,
									color: el.color
								}} />
						))}
					</ul>
				</div>
				<ButtonsContainer>
					<Button link='/changelog' color="grey">Cancel</Button>
					<Button link='/changelog'>Submit</Button>
				</ButtonsContainer>
			</FormContainer>
		</div>
	)
}

export default AddRecordChangelog;