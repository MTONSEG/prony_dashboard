import React from "react";
import './InputBody.scss';

const InputBody = ({ title, text, className }) => {
	return (
		<div className={className ? `${className} input-body` : 'input-body'}>
			<h1 className="input-body__title">{title}</h1>
			{
				text
					? <p className="input-body__text">{text}</p>
					: <></>
			}

		</div>
	)
}

export default InputBody;