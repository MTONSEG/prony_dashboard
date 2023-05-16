import React from 'react';
import './BigTitle.scss';

const BigTitle = ({ children, className }) => {

	return (
		<h1 className={className ? `${className} big-title` : 'big-title'}>
			{children}
		</h1>
	)
}

export default BigTitle;