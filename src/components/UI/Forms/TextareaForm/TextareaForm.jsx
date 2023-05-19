import React, { useState } from "react";
import '../Forms.scss';


const TextareaForm = ({ title, name, className, errorMess, value, setValue, error, ph }) => {

	return (
		<div className={className ? `${className} input-wrap` : 'input-wrap'}>
			{
				errorMess
					? <p className='input-error-mess'>{errorMess}</p>
					: <></>
			}
			<textarea
				name={name ? name : 'textarea'}
				className={`textarea ${error && 'error'}`}
				value={value}
				placeholder={ph ? ph : ''}
				onChange={e => setValue(e.currentTarget.value)}
			/>
			{
				title
					? <p className='input-title'>{title}</p>
					: <></>

			}
		</div>
	)
}

export default TextareaForm;