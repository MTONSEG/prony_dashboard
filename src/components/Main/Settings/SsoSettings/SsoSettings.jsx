import React, { useState } from 'react';
import './SsoSettings.scss';
import { settings } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import ButtonsContainer from '../../../UI/Buttons/ButtonsContainer/ButtonsContainer';
import Button from '../../../UI/Buttons/Button/Button';
import ItemSsoStep from './ItemSsoStep/ItemSsoStep';
import { Link } from 'react-router-dom';
import GenerateForm from './GenerateForm/GenerateForm';

const SsoSettings = ({ edit }) => {
	const [state, setState] = useState(settings.sso);

	return (
		<div className='settings-sso'>
			<BigTitle className='settings-sso__title'>
				{state.title}
			</BigTitle>

			<div className='settings-sso__container'>
				<div className='settings-sso__header'>
					<p className="settings-sso__header-title">
						{state.defTitle}
					</p>
					<p className="settings-sso__header-title redirect">
						{state.redirect.title}
					</p>
				</div>
				<div className="settings-sso__body">
					<div className="settings-sso__body-block">
						<ItemSsoStep
							step='1'
							title='Your secret single sign on key'
						/>
						<GenerateForm/>

						<div className="settings-sso__step">
							<span className="item-sso-step__step">2</span>
							<span>Setup</span>
							<Link to=''
								className="settings-sso__step-link">
								single sign on
							</Link>
						</div>
					</div>
					<div className='settings-sso__body-block redirect'>
						{
							state.redirect.steps.map((el, i) => (
								<ItemSsoStep
									key={i}
									step={el.step}
									title={el.title}
									text={el.text}
								/>
							))
						}
					</div>

				</div>
				<ButtonsContainer className='settings-sso__btn-wrap'>
					<Button link='/'>Submit</Button>
				</ButtonsContainer>
			</div>
		</div>
	)
}

export default SsoSettings;