import React from 'react';

const RadioInputTheme = ({ text, name, value, checked, setChecked }) => (
	<label className='theme-header__label'>
		<input className="theme-header__input"
			type="radio"
			name={name}
			value={value}
			checked={checked === value}
			onChange={(e) => { setChecked(e.currentTarget.value) }}
		/>
		<div className='theme-header__custom'></div>
		<p className={checked === value ? "theme-header__text active":"theme-header__text"}>
			{text}
		</p>
	</label>
)

export default RadioInputTheme;