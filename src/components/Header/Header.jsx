import React, { useState } from 'react';
import './Header.scss';
import ThemeButtons from './ThemeButtons/ThemeButtons';
import UserMenuHeader from './UserInfo/UserMenuHeader';

const Header = ({ state }) => {

	return (
		<header className="header">
			<ThemeButtons state={state.theme} />
			<UserMenuHeader state={state.user} />
		</header>
	)
}

export default Header;