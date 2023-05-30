import React, { useState, useRef, useEffect } from 'react';
import './SelectCheckboxes.scss';
import iconArrow from '../../../../assets/icons/select-arr-tringle.svg';
import CheckboxForm from '../CheckboxForm/CheckboxForm';
import CheckboxesBody from './CheckboxesBody/CheckboxesBody';
import SelectPostForm from '../SelectPostForm/SelectPostForm';

const SelectCheckboxes = ({ state, ...props }) => {
	let [isActive, setActive] = useState(false);

	let currentEl = useRef(null);

	const handleActiveOnClick = (e) => {
		setActive(!isActive);
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

	let checkboxItems = state.list.map((el, i) => (
		<CheckboxForm
			className='filter-checkbox__item'
			key={i}
			name={el}
			title={el}
			checked={false}
		/>
	));

	let style = props.className ? `${props.className}` : ''

	return (
		<div
			ref={currentEl}
			className={isActive
				? `${style} filter-checkbox active`
				: `${style} filter-checkbox`
			}>
			<div className="filter-checkbox__header"
				onClick={handleActiveOnClick}>
				<p className="filter-checkbox__title">
					<img src={iconArrow} alt="icon" className="filter-checkbox__icon" />
					{state.title}
				</p>
			</div>
			<CheckboxesBody
				title={state.title}
				className={'filter-checkbox__body'}
				onBtnClick={handleActiveOnClick}
			>
				{props.select
					? <SelectPostForm state={state.list} />
					: checkboxItems
				}
			</CheckboxesBody>
		</div>)
}

export default SelectCheckboxes;