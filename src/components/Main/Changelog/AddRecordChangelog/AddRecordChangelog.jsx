import React, { useState } from 'react';
import './AddRecordChangelog.scss';

const AddRecordChangelog = ({ edit }) => {
	const [state, setState] = useState(addSegments);

	return (
		<div className='add-segments'>
			<BigTitle className='add-segments__title'>
				{edit ? state.titleEdit : state.title}
			</BigTitle>
			<FormContainer className='add-segments__body'>
				
				<ButtonsContainer>
					<Button link='/users/segments' color="grey">Cancel</Button>
					<Button link='/users/segments'>Submit</Button>
				</ButtonsContainer>
			</FormContainer>
		</div>
	)
}

export default AddRecordChangelog;