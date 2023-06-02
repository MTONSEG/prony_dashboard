import React, { useState } from 'react';
import './DomainSettings.scss';
import FormContainer from '../../../UI/Forms/FormContainer/FormContainer';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import InputFrom from '../../../UI/Forms/InputFrom/InputFrom';
import warningIcon from '../../../../assets/icons/warning-blue.svg';
import { Link } from 'react-router-dom';

const DomainSettings = props => {
	const [domain, setDomain] = useState('');

	return (
		<div className='settings-domain'>
			<BigTitle className='settings-domain__title'>
				Custom domain
			</BigTitle>
			<FormContainer className='settings-domain__body'>
				<div className="settings-domain__text-wrap">
					<p className="settings-domain__text">
						We've created prony.canny.io for you. Instead, you can use your own website (feedback.yoursite.com). Just add the domain below then follow
						<Link className='settings-domain__link'>these instructions.
						</Link>
					</p>
					<p className="settings-domain__text">
						Set your primary domain to update the links we use in our product/emails.
					</p>
				</div>
				<div className="settings-domain__disabled">
					You have not set up any custom domains
				</div>
				<InputFrom
					className='settings-domain__domain-inp'
					title='Domain'
					name='Domain'
					value={domain}
					setValue={setDomain}
				/>
				<p className="settings-domain__warning">
					<img src={warningIcon} alt="warning" />
					<span>
						Make sure you point to cname.prony.io in your DNS settings
					</span>
				</p>
			</FormContainer>
		</div>
	)
}

export default DomainSettings;