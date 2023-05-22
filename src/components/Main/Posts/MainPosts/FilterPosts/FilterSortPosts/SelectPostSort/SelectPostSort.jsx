import React, { useState, useRef, useEffect } from 'react';
import './SelectPostSort.scss';
import iconArrow from '../../../../../../../assets/icons/select-arr-tringle.svg';

const SelectPostSort = ({ state, ...props }) => {
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
			className="select-post-sort__item"
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
					"select-post-sort active" : "select-post-sort"
			}>
			<div
				className="select-post-sort__header"
				onClick={handleActiveOnClick}
			>
				<p
					className="select-post-sort__title"
				>
					<img src={iconArrow} alt="icon" className="select-post-sort__icon" />
					{currentValue}

				</p>
			</div>
			<ul
				className="select-post-sort__body">
				{selectItems}
			</ul>
		</div>)
}

export default SelectPostSort;