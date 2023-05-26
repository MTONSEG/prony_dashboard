import React, { useState } from 'react';
import { voters } from '../../../../../store';
import BigTitle from '../../../../UI/BigTitle/BigTitle';
import SwopBtn from '../../../../UI/Buttons/SwopBtn/SwopBtn';
import './VotersPosts.scss';

const VotersPosts = props => {
	let [state, setState] = useState(voters);
	let [modalActive, setModalActive] = useState(false)

	return (
		<main className='voters'>
			<div className="voters__header">
				<BigTitle className='voters__header__title'>{state.title}</BigTitle>
				<p className="voters__subtitle">{state.subtitle}</p>
				<SwopBtn />
			</div>
			<ul className="voters__list">

			</ul>
		</main>
	)
}

export default VotersPosts;