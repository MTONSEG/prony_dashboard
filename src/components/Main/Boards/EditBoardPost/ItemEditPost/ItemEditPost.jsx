import React, { useState } from 'react';
import InputFrom from '../../../../UI/Forms/InputFrom/InputFrom';
import TextareaForm from '../../../../UI/Forms/TextareaForm/TextareaForm';
import SelectPostForm from '../../../../UI/Forms/SelectPostForm/SelectPostForm';
import CheckboxSlideFrom from '../../../../UI/Forms/CheckboxSlideFrom/CheckboxSlideForm';
import RadioForm from '../../../../UI/Forms/RadioForm/RadioForm';
import removeIcon from '../../../../../assets/icons/remove-post.svg';
import './ItemEditPost.scss';

const ItemEditPost = ({ type, title, body, defaultPrivacy, required, privacy }) => {
	let [valueInp, setValueInp] = useState('');
	let [valueText, setValueText] = useState('');
	let [privacyValue, setPrivacyValue] = useState(defaultPrivacy);

	let privacyRadios = privacy.map(el => (
		<RadioForm
			className='item-edit-post__radio'
			name={type}
			title={el.title}
			value={el.value}
			checked={privacyValue}
			setChecked={setPrivacyValue}
		/>
	))

	return (
		<div className="item-edit-post">
			<div className="item-edit-post__left">
				<InputFrom
					className={'item-edit-post__title-inp'}
					ph={title}
					value={valueInp}
					setValue={setValueInp}
				/>
				{
					type === 'select'
						? <SelectPostForm state={body} />
						: <></>
				}
				{
					type === 'textarea'
						? <TextareaForm
							className={'item-edit-post__textarea'}
							value={valueText}
							setValue={setValueText}
							ph={body}
						/>
						: <></>
				}

			</div>
			<div className="item-edit-post__right">
				<p className="item-edit-post__title-privacy">Privacy</p>
				<div className="item-edit-post__right-body">
					<div className="item-edit-post__required">
						<CheckboxSlideFrom
							title={required.title}
							className='item-edit-post__required'
						/>
					</div>
					<div className="item-edit-post__radios">
						{privacyRadios}
					</div>
					<div className="item-edit-post__remove-btn">
						<img src={removeIcon} alt="remove" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ItemEditPost;