import React, { useState } from 'react';
import './MainTagScreen.scss';
import { tagScreen } from '../../../../store';
import BigTitle from '../../../UI/BigTitle/BigTitle';
import Button from '../../../UI/Buttons/Button/Button';
import ItemTagList from './ItemTagList/ItemTagList';

const MainTagScreen = (props) => {
	const [state, setState] = useState(tagScreen);

	return (
		<div className='tag-screen'>
			<div className="tag-screen__header">
				<BigTitle>{state.title}</BigTitle>
				<Button>{state.titleBtn}</Button>
			</div>
			<div className="tag-screen__body">
				<div className="tag-screen__head-list">
					<span className='tag-screen__title-list'>Name</span>
					<span className='tag-screen__title-list'>Color</span>
					<span className='tag-screen__title-list'>Privacy</span>
				</div>
				<ul className="tag-screen__list">
					{
						state.list.map(el => (
							<ItemTagList
								key={el.id}
								title={el.title}
								color={el.color}
								privacy={el.privacy}
								/>
						))
					}
				</ul>
			</div>
		</div>
	)
}

export default MainTagScreen;