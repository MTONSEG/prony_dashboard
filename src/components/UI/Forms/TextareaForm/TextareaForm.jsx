import React, { useState } from "react";
import '../Forms.scss';


const TextareaForm = ({ title, name, className, errorMess, value, setValue, error }) => {

	return (
		<div className={`${className && className} input-wrap`}>
			<p className='input-error-mess'>{errorMess}</p>
			<textarea
				name={name ? name : 'textarea'}
				className={`textarea ${error && 'error'}`}
				value={value}
				onChange={e => setValue(e.currentTarget.value)}
			/>
			<p className='input-title'>{title}</p>
		</div>
	)
}

export default TextareaForm;