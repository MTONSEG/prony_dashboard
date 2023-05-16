import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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

	let [activeSettingList, setActiveSettingList] = useState(false);
	let settingEl = useRef();

	let listSetting = state.setting.list.map((el, i) => (
		<li key={i} className="settings-navbar__item">
			<Link to="" className='settings-navbar__link'>{el}</Link>
		</li>
	))

	const handleOnSettingsClick = () => { setActiveSettingList(!activeSettingList) }

	return (
		<nav className="navbar">
			<Logo icon={state.logo} />

			<div className="navbar__list">
				<Link to="/" className="navbar__item">
					<DashboardIcon className="navbar__item-icon" />
					<p className="navbar__item-text">Dashboard</p>
				</Link>
				<Link to="/boards" className="navbar__item">
					<BoardIcon className="navbar__item-icon stroke" />
					<p className="navbar__item-text">Boards</p>
				</Link>
				<Link to="/posts" className="navbar__item">
					<PostsIcon className="navbar__item-icon stroke" />
					<p className="navbar__item-text">Posts</p>
				</Link>
				<Link to="/statuses" className="navbar__item">
					<StatusesIcon className="navbar__item-icon stroke" />
					<p className="navbar__item-text">Statuses</p>
				</Link>
				<Link to="/users" className="navbar__item">
					<UsersIcon className="navbar__item-icon" />
					<p className="navbar__item-text">Users</p>
				</Link>
				<Link to="/changelog" className="navbar__item">
					<ChangelogIcon className="navbar__item-icon" />
					<p className="navbar__item-text">Changelog</p>
				</Link>
				<div
					className={
						activeSettingList
							? "navbar__settings settings-navbar active"
							: "navbar__settings settings-navbar"
					}
					onClick={handleOnSettingsClick}
				>
					<div className="settings-navbar__header navbar__item">
						<SettingsIcon className="navbar__item-icon-setting" />
						<p className="navbar__item-text">Settings</p>
					</div>

					<ul ref={settingEl}
						className="settings-navbar__list"
						style={
							activeSettingList
								? { height: settingEl.current.scrollHeight }
								: { height: '0' }

						}
						onClick={e => { e.stopPropagation() }}
					>
						{listSetting}
					</ul>

				</div>
				<Link className="navbar__item">
					<IntegrationsIcon className="navbar__item-icon stroke" />
					<p className="navbar__item-text">Integrations</p>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar;