import React, { useState, Suspense } from 'react';
import Loading from '../../../UI/Loading/Loading';

import GraphInputRadio from './GraphInputRadio/GraphInputRadio';
import './GraphStat.scss';
// import GraphStatCharts from './GraphStatCharts/GraphStatCharts';
const GraphStatCharts = React.lazy(() => import('./GraphStatCharts/GraphStatCharts'));

const GraphStat = ({ state, ...props }) => {
	let [selectedStatRadio, setSelectedStatRadio] = useState('users');

	return (
		<div className='graph-stat'>
			<div className="graph-stat__header">
				<h1 className="graph-stat__title">{state.title}</h1>
				<div className="graph-stat__radios radio-graph">
					<GraphInputRadio
						text={state.usersText}
						name={'stat'}
						value='users'
						checked={selectedStatRadio}
						setChecked={setSelectedStatRadio}
						color='blue' 
					/>
					<GraphInputRadio
						text={state.votersText}
						name={'stat'}
						value='voters'
						checked={selectedStatRadio}
						setChecked={setSelectedStatRadio}
						color='green'
					/>
					<GraphInputRadio
						text={state.postsText}
						name={'stat'}
						value='posts'
						checked={selectedStatRadio}
						setChecked={setSelectedStatRadio}
						color='orange'
					/>
				</div>
			</div>
			<Suspense fallback={<Loading/>}>
				<GraphStatCharts 
					className={'graph-stat__body'}
					state={state}
					selectedStatRadio={selectedStatRadio}
					setSelectedStatRadio={setSelectedStatRadio}
				/>
			</Suspense>
		</div>
	)
}

export default GraphStat;