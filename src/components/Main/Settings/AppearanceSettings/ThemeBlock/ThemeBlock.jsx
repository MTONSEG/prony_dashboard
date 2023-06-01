import React, { useState } from 'react';
import './ThemeBlock.scss';
import ThemeItem from './ThemeItem/ThemeItem';

const ThemeBlock = ({ state }) => {
	const [selected, setSelected] = useState('light');

	const onClickHandler = (item) => {setSelected(item)}

	return (
		<div className='theme-wrap'>
			<p className="theme-wrap__title">{state.title}</p>
			<ul className="theme-wrap__list">
				{
					state.list.map((el, i) => (
						<ThemeItem
							key={i}
							bg={el.bg}
							colors={el.colors}
							name={el.name}
							selected={selected}
							onClick={onClickHandler}
						/>
					))
				}
			</ul>
		</div>
	)
}

export default ThemeBlock;