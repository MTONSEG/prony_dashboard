import React from 'react';
import './ThemeItem.scss';

const CheckedIcon = ({ className }) => {
	return (
		<svg className={className} width="36" height="27" viewBox="0 0 36 27" xmlns="http://www.w3.org/2000/svg">
			<path d="M12.0001 21.34L3.66008 13L0.830078 15.83L12.0001 27L36.0001 3L33.1701 0.17L12.0001 21.34Z" />
		</svg>
	)
}

const ThemeItem = ({ bg, colors, name, selected, onClick }) => {

	console.log(name === selected)

	return (
		<li
			onClick={() => { onClick(name) }}
			style={{
				border: `1px solid ${bg}`
			}}
			className={name === selected
				? 'theme-item selected'
				: 'theme-item'
			}>
			<div
				style={{
					background: bg,
				}}
				className='theme-item__color'>
				<CheckedIcon
					className={`theme-item__color-icon ${name}`} />
			</div>
			<ul className='theme-item__round-list'>
				{
					colors.map((el, i) => (
						<li key={i}
							className='theme-item__round'
							style={{
								background: el,
								border: `${el === '#fff'
									? '1px solid #E0E0E0'
									: '0'}`
							}}></li>
					))
				}
			</ul>
		</li>
	)
}

export default ThemeItem;