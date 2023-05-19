import React, { useState, useRef, useEffect } from 'react';
import './SelectPostForm.scss';
import iconArrow from '../../../../assets/icons/select-arr-tringle.svg';

const SelectPostForm = ({ state, ...props }) => {
	let [isActive, setActive] = useState(false);
	let [currentValue, setCurrentValue] = useState(state[0]);

	let currentEl = useRef(null);

	const handleActiveOnClick = (e) => {
		setActive(!isActive);
	}
	const handleOnCurrentClick = (e) => {
		let targetCurrent = e.currentTarget;

		setCurrentValue(targetCurrent.textContent);
		handleActiveOnClick();
	}

	useEffect(() => {
		function handleClickOutside(event) {
			if (currentEl.current && !currentEl.current.contains(event.target)) {
				setActive(false);
			}
		}

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [currentEl]);

	let selectItems = state.map((el, i) => (
		<li
			className="post-form-select__item"
			key={i}
			onClick={handleOnCurrentClick}

		>
			{el}
		</li>
	))

	return (
		<div
			ref={currentEl}
			className={
				isActive ?
					"post-form-select active" : "post-form-select"
			}>
			<div
				className="post-form-select__header"
				onClick={handleActiveOnClick}
			>
				<p
					className="post-form-select__title"
				>
					<img src={iconArrow} alt="icon" className="post-form-select__icon" />
					{currentValue}

				</p>
			</div>
			<ul
				className="post-form-select__body">
				{selectItems}
			</ul>
		</div>)
}

export default SelectPostForm;