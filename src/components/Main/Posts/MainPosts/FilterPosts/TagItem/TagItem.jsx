import React from 'react';
import iconDelTag from '../../../../../../assets/icons/close-blue-dark.svg';
import './TagItem.scss';


const TagItem = ({text, style}) => {
	return (
		<div className='tag-item' style={style}>
			{text}
			<img src={iconDelTag} alt="del" />
		</div>
	)
}

export default TagItem;