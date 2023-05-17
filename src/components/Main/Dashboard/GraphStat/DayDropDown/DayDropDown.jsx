import React, { useState, useRef, useEffect } from 'react';
import './DayDropDown.scss';
import iconArrow from '../../../../../assets/icons/arrow-grey-down.svg';

const DayDropDown = ({ state, ...props }) => {
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
			className="graph-select__item"
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
					"graph-select active" : "graph-select"
			}>
			<div
				className="graph-select__header"
				onClick={handleActiveOnClick}
			>
				<p
					className="graph-select__title"
				>
					<img src={iconArrow} alt="icon" className="graph-select__icon" />
					{currentValue}

				</p>
			</div>
			<ul
				className="graph-select__body">
				{selectItems}
			</ul>
		</div>)
}

export default DayDropDown;