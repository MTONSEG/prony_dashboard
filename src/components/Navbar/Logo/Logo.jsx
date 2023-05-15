import React from 'react';
import './Logo.scss';

const Logo = ({ icon }) => {
	return (
		<div className="logo">
			<img src={icon} alt="Logo" className="logo__icon" />
		</div>
	)
}

export default Logo;