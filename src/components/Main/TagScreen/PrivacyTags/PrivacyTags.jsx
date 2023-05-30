import React, { useState } from 'react';
import RadioForm from '../../../UI/Forms/RadioForm/RadioForm';
import './PrivacyTags.scss';

const PrivacyTags = ({ state, className, privacy, setPrivacy }) => {

	let radioList = state.list.map((el, i) => <RadioForm
		key={i}
		name={state.title}
		title={el.title}
		value={el.value}
		checked={privacy}
		setChecked={setPrivacy}
		className={'privacy-tag__radio'}
	/>)

	return (
		<div className={className
			? `${className} privacy-tag`
			: 'privacy-tag'
		}>
			<p className="privacy-tag__title">{state.title}</p>
			<div className="privacy-tag__radio-list">
				{radioList}
			</div>
			<p className="privacy-tag__text">{state.text}</p>
		</div>
	)
}

export default PrivacyTags;