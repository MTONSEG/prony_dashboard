import React from 'react';
import './UserMenuHeader.scss';

const UserMenuHeader = ({ state }) => {
	return (
		<div className='user-header'>
			<div className="user-header__image-wap">
				<img src={state.photo} alt={state.name} className="user-header__image" />
			</div>
			<div className="user-header__body">
				<h1 className="user-header__name">{state.name}</h1>
				{
					state.status
						? <p className="user-header__status">Online</p>
						: <p className="user-header__status offline">Offline</p>
				}
			</div>
		</div>
	)
}

export default UserMenuHeader;