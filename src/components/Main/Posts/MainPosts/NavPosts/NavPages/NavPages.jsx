import React, { useState } from 'react';
import './NavPages.scss';
import startIcon from '../../../../../../assets/icons/left-page.svg';
import prevIcon from '../../../../../../assets/icons/left-page-arr.svg';


const NavPages = ({ state, show }) => {
	return (
		<nav className='nav-pages'>
			<div className="nav-pages__start-btn">
				<img src={startIcon} alt="start" className="nav-pages__start-btn-icon" />
			</div>
			<div className="nav-pages__nav-btn">
				<img src={prevIcon} alt="start" className="nav-pages__start-btn-icon" />
			</div>

			<ul className="nav-pages__list-page">
				<li className="nav-pages__num-page active">1</li>
				<li className="nav-pages__num-page">2</li>
				<li className="nav-pages__num-page">3</li>
				<li className="nav-pages__num-page">4</li>
				<li className="nav-pages__num-page">5</li>
			</ul>

			<div className="nav-pages__nav-btn rotate">
				<img src={prevIcon} alt="start" className="nav-pages__start-btn-icon" />
			</div>
			<div className="nav-pages__start-btn rotate">
				<img src={startIcon} alt="start" className="nav-pages__start-btn-icon" />
			</div>
		</nav>
	)
}

export default NavPages;


