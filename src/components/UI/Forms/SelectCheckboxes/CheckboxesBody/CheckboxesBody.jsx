import React from 'react';
import Button from '../../../Buttons/Button/Button';
import './CheckboxesBody.scss';

const CheckboxesBody = ({ title, className, children, onBtnClick }) => {
	return (
		<div className={className
			? `${className} body-filter-select`
			: 'body-filter-select'
		}>
			<p className="body-filter-select__title">
				{title}
			</p>

			<div className="body-filter-select__list">
				{children}
			</div>

			<div className="body-filter-select__buttons">
				<Button
					className="body-filter-select__btn"
					onClick={onBtnClick}
				>
					Apply filters
				</Button>

				<Button
					className="body-filter-select__btn"
					color='grey'
					onClick={onBtnClick}
				>
					Cancel
				</Button>
			</div>
		</div>
	)
}

export default CheckboxesBody;