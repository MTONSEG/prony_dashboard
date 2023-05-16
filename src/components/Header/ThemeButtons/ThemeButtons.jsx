import React, { useState } from 'react';
import RadioInputTheme from './RadioInputTheme/RadioInputTheme';
import './ThemeButtons.scss';


const ThemeButtons = ({ state }) => {

	let [checkedTheme, setCheckedTheme] = useState(state.defaultTheme);

	return (
		<div className="theme-header">
			<RadioInputTheme
				text={state.dayText}
				name={state.name}
				value='day'
				checked={checkedTheme}
				setChecked={setCheckedTheme}
			/>
			<RadioInputTheme
				text={state.nightText}
				name={state.name}
				value='night'
				checked={checkedTheme}
				setChecked={setCheckedTheme}
			/>
		</div>
	)
}

export default ThemeButtons;