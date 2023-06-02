import React from 'react';
import './ItemSsoStep.scss';

const ItemSsoStep = ({ step, title, text }) => {

	return (
		<div className='item-sso-step'>
			<span className='item-sso-step__step'>{step}</span>
			<div className="item-sso-step__body">
				<p className="item-sso-step__title">
					{title}
				</p>
				{text
					? <p className="item-sso-step__text">
						{text}
					</p>
					: <></>
				}
			</div>
		</div>
	)
}

export default ItemSsoStep;