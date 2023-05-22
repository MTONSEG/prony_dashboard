import React from 'react';
import iconDelTag from '../../../../../../assets/icons/close-blue-dark.svg';
import './TagItem.scss';


const TagItem = ({text}) => {
	return (
		<div className='tag-item'>
			{text}
			<img src={iconDelTag} alt="del" />
		</div>
	)
}

export default TagItem;