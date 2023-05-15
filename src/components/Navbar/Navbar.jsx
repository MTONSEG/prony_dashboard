import React from 'react';
import Logo from './Logo/Logo';
import './Navbar.scss';
import {
	DashboardIcon,
	BoardIcon,
	StatusesIcon,
	PostsIcon,
	UsersIcon,
	ChangelogIcon,
	SettingsIcon,
	IntegrationsIcon
} from '../UI/SVGIcons/SVGIcons';

const Navbar = ({ state }) => {
	return (
		<nav className="navbar">
			<Logo icon={state.logo} />
			<div className="navbar__list">
				<div className="navbar__item">
					<DashboardIcon className="navbar__item-icon" />
					<p className="navbar__item-text">Dashboard</p>
				</div>
				<div className="navbar__item">
					<BoardIcon className="navbar__item-icon stroke" />
					<p className="navbar__item-text">Boards</p>
				</div>
				<div className="navbar__item">
					<PostsIcon className="navbar__item-icon stroke" />
					<p className="navbar__item-text">Posts</p>
				</div>
				<div className="navbar__item">
					<StatusesIcon className="navbar__item-icon stroke" />
					<p className="navbar__item-text">Statuses</p>
				</div>
				<div className="navbar__item">
					<UsersIcon className="navbar__item-icon" />
					<p className="navbar__item-text">Users</p>
				</div>
				<div className="navbar__item">
					<ChangelogIcon className="navbar__item-icon" />
					<p className="navbar__item-text">Changelog</p>
				</div>
				<div className="navbar__item">
					<SettingsIcon className="navbar__item-icon-setting" />
					<p className="navbar__item-text">Settings</p>
				</div>
				<div className="navbar__item">
					<IntegrationsIcon className="navbar__item-icon stroke" />
					<p className="navbar__item-text">Integrations</p>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;