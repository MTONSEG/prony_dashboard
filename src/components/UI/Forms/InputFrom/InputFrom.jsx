import React, { useEffect, useState } from "react";
import '../Forms.scss';


const InputFrom = ({ title, name, className, errorMess, type, value, setValue, error,ph }) => {

	return (
		<div className={className ? `${className} input-wrap` : 'input-wrap'}>
			{
				errorMess
					? <p className='input-error-mess'>{errorMess}</p>
					: <></>
			}
			<input
				name={name ? name : ''}
				type={type ? type : 'text'}
				className={`input ${error ? 'error' : ''}`}
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

export default InputFrom;