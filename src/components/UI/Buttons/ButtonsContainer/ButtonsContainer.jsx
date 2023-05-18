import React from 'react';
import './ButtonsContainer.scss';

const ButtonsContainer = ({ children, className }) => {

	return (
		<div className={className ? `${className} buttons-container` : 'buttons-container'}>
			{children}
		</div>
	)
}

export default ButtonsContainer;