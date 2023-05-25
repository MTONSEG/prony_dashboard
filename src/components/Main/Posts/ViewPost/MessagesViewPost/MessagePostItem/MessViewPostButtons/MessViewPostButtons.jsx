import React, { useState } from 'react';
import { DeleteMessIcon, EditMessIcon, PrivateMessIcon, PublicMessIcon, ReplyMessIcon } from '../../../IconsViewPost/IconsViewPost';
import './MessViewPostButtons.scss';

const MessViewPostButtons = ({ className, privacy, setPrivacy }) => {


	const onClickHandler = () => { setPrivacy(!privacy) }

	return (
		<ul className={`messages-buttons ${className ? className : ''}`
		}>
			<li className="messages-buttons__item">
				<EditMessIcon className='messages-buttons__icon' />
				<span className='messages-buttons__text'>Edit</span>
			</li>
			<li className="messages-buttons__item">
				<ReplyMessIcon className='messages-buttons__icon' />
				<span className='messages-buttons__text'>Reply</span>
			</li>
			<li className="messages-buttons__item">
				<DeleteMessIcon className='messages-buttons__icon' />
				<span className='messages-buttons__text'>Delete</span>
			</li>
			{privacy
				? <li className="messages-buttons__item private"
					onClick={onClickHandler}
				>
					<PrivateMessIcon className='messages-buttons__icon' />
					<span className='messages-buttons__text'>Private</span>
				</li>
				: <li className="messages-buttons__item"
					onClick={onClickHandler}
				>
					<PublicMessIcon className='messages-buttons__icon' />
					<span className='messages-buttons__text'>Public</span>
				</li>
			}
		</ul>
	)
}

export default MessViewPostButtons;