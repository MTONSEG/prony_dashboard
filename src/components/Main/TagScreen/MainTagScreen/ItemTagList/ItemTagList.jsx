import React from 'react';
import './ItemTagList.scss';
import { RemoveBoardPostIcon, ReplaceIcon } from '../../../Boards/TableBoards/ItemTableBoards/OptionBoardPopup/Icons';
import { EditMessIcon } from '../../../Posts/ViewPost/IconsViewPost/IconsViewPost';
import { Link } from 'react-router-dom';

const ItemTagList = ({ className, title, color, privacy }) => {

	return (
		<li className={className
			? `${className} item-tag-list`
			: 'item-tag-list'
		}>
			<div className="item-tag-list__tag">
				<div style={{ background: color }}
					className="item-tag-list__tag-item">{title}</div>
			</div>
			<div className="item-tag-list__color">
				<div style={{ background: color }} className="item-tag-list__color-item"></div>
			</div>
			<div className="item-tag-list__right-block">
				<div
					className={privacy === 'public'
						? "item-tag-list__privacy"
						: "item-tag-list__privacy private"
					}>{privacy}</div>
				<div className="item-tag-list__button-list">
					<Link to='replace' className='item-tag-list__btn'>
						<ReplaceIcon />
					</Link>
					<Link to='edit' className='item-tag-list__btn'>
						<EditMessIcon />
					</Link>
					<Link to='' className='item-tag-list__btn'>
						<RemoveBoardPostIcon />
					</Link>
				</div>
			</div>
		</li>
	)
}

export default ItemTagList;