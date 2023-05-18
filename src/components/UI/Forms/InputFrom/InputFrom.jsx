import React, { useEffect, useState } from "react";
import '../Forms.scss';


const InputFrom = ({ title, name, className, errorMess,type, value, setValue }) => {

	return (
		<div className={`${className && className} input-wrap`}>
			<p className='input-error-mess'>{errorMess}</p>
			<input
				name={name ? name : ''}
				type={type ? type : 'text'}
				className="input"
				value={value}
				onChange={e => setValue(e.currentTarget.value)}
			/>
			<p className='input-title'>{title}</p>
		</div>
	)
}

export default InputFrom;