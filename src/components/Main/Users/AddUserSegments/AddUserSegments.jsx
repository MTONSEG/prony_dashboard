import React, { useState } from 'react';
import './AddUserSegments.scss';
import { addSegments } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import FormContainer from '../../../UI/Forms/FormContainer/FormContainer';
import InputForm from '../../../UI/Forms/InputFrom/InputFrom';
import SelectPostForm from '../../../UI/Forms/SelectPostForm/SelectPostForm';
import ButtonsContainer from '../../../UI/Buttons/ButtonsContainer/ButtonsContainer';
import Button from '../../../UI/Buttons/Button/Button';

const AddUserSegments = ({ edit }) => {
	const [state, setState] = useState(addSegments);
	const [segmentName, setSegmentName] = useState('');
	const [value, setValue] = useState('');

	return (
		<div className='add-segments'>
			<BigTitle className='add-segments__title'>
				{edit ? state.titleEdit : state.title}
			</BigTitle>
			<FormContainer className='add-segments__body'>
				<div className="add-segments__list">
					<InputForm
						className='add-segments__name'
						title={state.name.title}
						name={state.name.title}
						ph={state.name.ph}
						value={segmentName}
						setValue={setSegmentName}
					/>
					<div className="add-segments__company">
						<SelectPostForm
							className='add-segments__company'
							state={state.company} />
					</div>

					<div className="add-segments__is">
						<SelectPostForm
							className='add-segments__is'
							state={state.is} />
					</div>

					<InputForm
						className='add-segments__value'
						ph={state.value.title}
						value={value}
						setValue={setValue}
					/>
					<div className="add-segments__attr">
						<SelectPostForm
							className='add-segments__attr'
							state={state.attr} />
					</div>

				</div>
				<ButtonsContainer>
					<Button link='/users/segments' color="grey">Cancel</Button>
					<Button link='/users/segments'>Submit</Button>
				</ButtonsContainer>
			</FormContainer>
		</div>
	)
}

export default AddUserSegments;