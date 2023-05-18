import React, { useState } from 'react';
import RadioForm from '../../../../UI/Forms/RadioForm/RadioForm';
import './RightEditForm.scss';

const RightEditForm = ({ state, className }) => {
	let [checkPrivacy, setCheckPrivacy] = useState('private');
	let [checkStatus, setCheckStatus] = useState('unlocked');

	let privacyRadios = state.privacy.list.map((el, i) => (
		<RadioForm
			key={i}
			name={state.privacy.title}
			value={el.value}
			checked={checkPrivacy}
			setChecked={setCheckPrivacy}
			title={el.title}
			text={el.text}
		/>
	))

	let statusRadios = state.status.list.map((el, i) => (
		<RadioForm
			key={i}
			name={state.status.title}
			value={el.value}
			checked={checkStatus}
			setChecked={setCheckStatus}
			title={el.title}
			text={el.text}
		/>
	))

	return (
		<div className={className
			? `${className} right-edit-from`
			: `right-edit-from`
		}>
			<div className="right-edit-from__top">
				<div className="right-edit-from__header">
					<p className="right-edit-from__title">
						{state.privacy.title}
					</p>
					<p className="right-edit-from__title">
						{state.status.title}
					</p>
				</div>
				<div className="right-edit-from__body">
					{privacyRadios}
					{statusRadios}
				</div>
			</div>
			<div className="right-edit-from__bottom">
				<div className="right-edit-from__left"></div>
				<div className="right-edit-from__right"></div>
			</div>
		</div>
	)
}

export default RightEditForm;