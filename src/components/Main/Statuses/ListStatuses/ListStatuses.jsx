import React, { useState } from 'react';
import './ListStatuses.scss';
import { listStatus } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import Button from '../../../UI/Buttons/Button/Button';
import { Reorder } from "framer-motion";
import ItemUserSegment from './ItemUserSegment';
import { Link } from 'react-router-dom';
import resetIcon from '../../../../assets/icons/reset.svg';
import infoIcon from '../../../../assets/icons/info.svg';

const ListStatuses = (props) => {
	const [state, setState] = useState(listStatus);
	const [list, setList] = useState(state.list);

	return (
		<div className='list-status'>
			<div className="list-status__header">
				<BigTitle className='list-status__title'>
					{state.title}
				</BigTitle>
				<div className="list-status__header-right">
					<Link className='list-status__reset-btn'>
						<img src={resetIcon} alt="icon" className="list-status__reset-icon" />
						<span>{state.titleReset}</span>
					</Link>
					<Button link='add'>{state.titleBtn}</Button>
				</div>

			</div>
			<div className="list-status__container">
				<div className="list-status__header-list">
					<p className="list-status__title-cat name">
						Name
					</p>
					<p className="list-status__title-cat votable">
						<span>Votable</span>
						<img src={infoIcon} alt="icon" className="list-status__title-cat-icon" />
					</p>
					<p className="list-status__title-cat roadmap">
						Show on roadmap
					</p>
					<p className="list-status__title-cat privacy">
						Privacy
					</p>
					<p className="list-status__title-cat color">
						Color
					</p>
				</div>
				<Reorder.Group
					axis="y"
					onReorder={setList}
					values={list}
					style={{
						overflow: 'auto'
					}}
				>
					{list.map((item) => (
						<ItemUserSegment
							key={item.id}
							item={item}
						/>
					))}
				</Reorder.Group>
			</div>
		</div>
	)
}

export default ListStatuses;