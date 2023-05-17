import React, { useState } from 'react';
import { EyeIcon, LockIcon, OptionIcon } from '../../../../UI/SVGIcons/SVGIcons';
import { Reorder, useDragControls } from "framer-motion";
import { ReorderIcon } from "./Icon";
import '../TableBoards.scss';
import OptionBoardPopup from './OptionBoardPopup/OptionBoardPopup';


const ItemTableBoards = ({ options, title, amountPosts, item }) => {
	let [selectView, setSelectView] = useState(false);
	let [selectLock, setSelectLock] = useState(false);
	let [activeOption, setActiveOption] = useState(false);

	const dragControls = useDragControls();

	return (
		<Reorder.Item
			className='table-boards__item'
			value={item}
			id={item}
			dragListener={false}
			dragControls={dragControls}
		>
			<ReorderIcon dragControls={dragControls} className="table-boards__drag-icon" />
			<p className="table-boards__text">{title}</p>
			<div className="table-boards__right">
				<p className="table-boards__amount">{amountPosts}</p>
				<div className="table-boards__button-list">
					<div
						className={`table-boards__btn ${selectView && 'active'}`}
						onClick={() => { setSelectView(!selectView) }}>
						<EyeIcon className={'table-boards__icon'} />
					</div>
					<div
						className={`table-boards__btn ${selectLock && 'active'}`}
						onClick={() => { setSelectLock(!selectLock) }}>
						<LockIcon className={'table-boards__icon'} />
					</div>
					<div className='table-boards__btn-option'
						onClick={() => { setActiveOption(!activeOption) }}>
						<OptionIcon className={'table-boards__icon'} />
					</div>
				</div>
			</div>
			<OptionBoardPopup
				state={options}
				active={activeOption}
				setActive={setActiveOption}
			/>
		</Reorder.Item>
	)
}


export default ItemTableBoards;