import React, { useState } from 'react';
import './ColorBullets.scss';

const ColorBullets = ({ state, setState }) => {
	const [list, setList] = useState(state.colors.list);


	const onClickHandler = (e) => {
		console.log(e.currentTarget)
	}

	const changeCheck = (id) => {
		let newList = [...list];

		newList.forEach(el => {
			el.clicked = false;

			if (id === el.id) {
				el.clicked = !el.clicked;
				console.log(el.clicked)
			}
		})

		setList([...newList])
	}

	return (
		<div className='color-bullets'>
			<p className="color-bullets__title">{state.colors.title}</p>
			<ul className="color-bullets__list">
				{
					list.map(el => (
						<li
							key={el.id}
							className={el.clicked
								? 'color-bullets__item clicked'
								: 'color-bullets__item'
							}
							style={{ background: el.color }}
							onClick={() => { changeCheck(el.id) }}
						></li>
					))
				}
			</ul>
		</div>
	)
}

export default ColorBullets;