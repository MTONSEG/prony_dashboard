import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ children, link, color, ...props }) => {
	return (
		<Link
			to={link && link}
			className={
				props.className ?
					`${props.className} button ${color && color}` : `button ${color && color}`
			}
			onClick={props.onClick ? props.onClick : () => { }}
		>
			{children}
		</Link>
	)
}

export default Button;