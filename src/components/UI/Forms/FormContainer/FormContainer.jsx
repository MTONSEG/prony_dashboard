import React from "react";
import './FormContainer.scss';


const FormContainer = ({ className, children }) => {

	return (
		<form className={`${className && className} form-container`}>
			{children}
		</form>
	)
}

export default FormContainer;