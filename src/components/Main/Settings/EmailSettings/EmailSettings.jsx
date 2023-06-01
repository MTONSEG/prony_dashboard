import React, { useState } from 'react';
import './EmailSettings.scss';
import { settings } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import ButtonsContainer from '../../../UI/Buttons/ButtonsContainer/ButtonsContainer';
import Button from '../../../UI/Buttons/Button/Button';
import CheckboxForm from '../../../UI/Forms/CheckboxForm/CheckboxForm';
import SelectPostForm from '../../../UI/Forms/SelectPostForm/SelectPostForm';

const EmailSettings = ({ edit }) => {
	const [state, setState] = useState(settings.email);

	return (
		<div className='settings-email'>
			<BigTitle className='settings-email__title'>
				{state.title}
			</BigTitle>

			<div className='settings-email__container'>
				<div className='settings-email__header'>
					<p className="settings-email__header-title">
						{state.user.title}
					</p>
					<p className="settings-email__header-title admin">
						{state.admin.title}
					</p>
				</div>
				<div className="settings-email__body">
					<div className="settings-email__user-settings">
						{
							state.user.list.map(el => (
								<CheckboxForm
									key={el.id}
									className='settings-email__checkbox indexed'
									name={el.title}
									title={el.title}
									text={el.text}
									checked={el.value} />
							))
						}
					</div>
					<div className='settings-email__user-settings admin'>
						<CheckboxForm
							key={state.admin.id}
							className='settings-email__checkbox'
							name={state.admin.title}
							title={state.admin.title}
							text={state.admin.text}
							checked={state.admin.value}
						/>
						<div className="settings-email__select">
							<SelectPostForm state={state.admin.list}/>
						</div>
					</div>

				</div>
				<ButtonsContainer className='settings-email__btn-wrap'>
					<Button link='/'>Submit</Button>
				</ButtonsContainer>
			</div>
		</div>
	)
}

export default EmailSettings;