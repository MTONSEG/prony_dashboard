import React, { useState } from 'react';
import './ItemChangelogList.scss';
import { EditMessIcon } from '../../../Posts/ViewPost/IconsViewPost/IconsViewPost';
import { RemoveBoardPostIcon } from '../../../Boards/TableBoards/ItemTableBoards/OptionBoardPopup/Icons';

const ItemChangelogList = ({ title, time, labels }) => {
	const [activeOption, setActiveOption] = useState(false);
	
	return (
		<li className='item-changelog-list'>
			<p className="item-changelog-list__title">{title}</p>
			<p className="item-changelog-list__time">{time}</p>
			<ul className="item-changelog-list__labels">
				{labels.map((el, i) => (
					<li
						style={{
							background: el.bg,
							color: el.color
						}}
						className='item-changelog-list__label'
						key={i}>
						{el.title}
					</li>
				))}
			</ul>
			<div className="item-changelog-list__button-list">
				<EditMessIcon />
				<RemoveBoardPostIcon />
			</div>
		</li>
	)
}

export default ItemChangelogList;