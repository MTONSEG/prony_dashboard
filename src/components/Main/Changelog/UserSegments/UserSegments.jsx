import React, { useState } from 'react';
import './UserSegments.scss';
import { userSegments } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import Button from '../../../UI/Buttons/Button/Button';
import { Reorder } from "framer-motion";
import ItemUserSegment from './ItemUserSegment';

const UserSegments = (props) => {
	const [state, setState] = useState(userSegments);
	const [list, setList] = useState(state.list);

	return (
		<div className='user-segments'>
			<div className="user-segments__header">
				<BigTitle className='user-segments__title'>
					{state.title}
				</BigTitle>
				<Button link='add'>{state.titleBtn}</Button>
			</div>
			<div className="user-segments__container">
				<div className="user-segments__header-list">
					<p className="user-segments__title-cat">Name</p>
					<p className="user-segments__title-cat">String representation</p>
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

export default UserSegments;