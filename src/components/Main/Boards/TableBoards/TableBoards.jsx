import React, { useState } from 'react';
import ItemTableBoards from './ItemTableBoards/ItemTableBoards';
import './TableBoards.scss';
import { Reorder } from "framer-motion";

const TableBoards = ({ state, ...props }) => {
	let [boardsList, setBoardsList] = useState(state.list);

	return (
		<div className={
			props.className ?
				`${props.className} table-boards` : `table-boards`
		}>
			<div className="table-boards__header">
				<p className="table-boards__title">{state.nameTitle}</p>
				<p className="table-boards__title">{state.postTitle}</p>
			</div>
			<Reorder.Group
				axis="y"
				onReorder={setBoardsList}
				values={boardsList}
				style={{
					overflow: 'auto'
				}}
			>
				{boardsList.map((item) => (
					<ItemTableBoards
						key={item.id}
						item={item} 
						title={item.title}
						amountPosts={item.amountPosts}
						options={state.options}
						/>
				))}
			</Reorder.Group>

		</div>
	)
}



export default TableBoards;