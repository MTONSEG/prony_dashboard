import React from 'react';
import './GraphInputRadio.scss';

const GraphInputRadio = ({ text, name, value, checked, setChecked, color }) => (
	<label className={`radio-graph__label`}>
		<input className="radio-graph__input"
			type="radio"
			name={name}
			value={value}
			checked={checked === value}
			onChange={(e) => { setChecked(e.currentTarget.value) }}
		/>
		<div className={`radio-graph__custom ${color}`}></div>
		<p className={checked === value ? `radio-graph__text active ${color}` : "radio-graph__text"}
		>
			{text}
		</p>
	</label>
)

export default GraphInputRadio;