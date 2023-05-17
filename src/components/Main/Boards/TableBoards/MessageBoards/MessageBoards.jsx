import React, { useState } from 'react';
import './MessageBoards.scss';
import iconDone from '../../../../../assets/icons/done.svg';
import iconClose from '../../../../../assets/icons/close-white.svg';
import iconError from '../../../../../assets/icons/error.svg';

const MessageBoards = ({ error, text }) => {
	return (
		<div className={`message-board ${error && 'error'}`}>
			<p className="message-board__text">
				{error ? error : text}
			</p>

			<img src={iconDone} alt="Done" className="message-board__icon message-board__icon_done" />

			<img src={iconError} alt="Error" className="message-board__icon message-board__icon_error" />

			<img src={iconClose} alt="Close" className="message-board__icon message-board__icon_close" />
		</div>
	)
}

export default MessageBoards;