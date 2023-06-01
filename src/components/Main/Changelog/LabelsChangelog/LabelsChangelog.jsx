import React, { useState } from 'react';
import './LabelsChangelog.scss';
import { labelList } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import Button from '../../../UI/Buttons/Button/Button';
import { Reorder } from "framer-motion";
import ItemUserSegment from './ItemLabelsChangelog';

const LabelsChangelog = (props) => {
	const [state, setState] = useState(labelList);
	const [list, setList] = useState(state.list);

	return (
		<div className='list-labels'>
			<div className="list-labels__header">
				<BigTitle className='list-labels__title'>
					{state.title}
				</BigTitle>
				<Button link='add'>{state.titleBtn}</Button>
			</div>
			<div className="list-labels__container">
				<div className="list-labels__header-list">
					<p className="list-labels__header-item name">
						Name
					</p>
					<p className="list-labels__header-item">
						Color
					</p>
				</div>
				<Reorder.Group
					axis="y"
					onReorder={setList}
					values={list}
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

export default LabelsChangelog;