import React from "react";
import searchIcon from '../../../../assets/icons/search.svg';
import '../Forms.scss';


const SearchForm = ({ title, name, className, errorMess, type, value, setValue, error,ph }) => {

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
				className={`search-form ${error ? 'error' : ''}`}
				value={value}
				placeholder={ph ? ph : ''}
				onChange={e => setValue(e.currentTarget.value)}
			/>
			{
				title
					? <p className='input-title'>{title}</p>
					: <></>

			}

			<div className="search-form__btn">
				<img src={searchIcon} alt="search" />
			</div>
		</div>
	)
}

export default SearchForm;