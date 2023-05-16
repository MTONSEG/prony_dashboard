import React, { useState, Suspense } from 'react';
import Loading from '../../../UI/Loading/Loading';
import DayDropDown from './DayDropDown/DayDropDown';

import GraphInputRadio from './GraphInputRadio/GraphInputRadio';
import './GraphStat.scss';
// import GraphStatCharts from './GraphStatCharts/GraphStatCharts';
const GraphStatCharts = React.lazy(() => import('./GraphStatCharts/GraphStatCharts'));

const GraphStat = ({ state, ...props }) => {
	let [selectedStatRadio, setSelectedStatRadio] = useState('users');

	let listRadios = state.radios.map((el, i) => (
		<GraphInputRadio
			key={i}
			text={el.text}
			name={el.name}
			value={el.value}
			checked={selectedStatRadio}
			setChecked={setSelectedStatRadio}
			color={el.color}
		/>
	))

	return (
		<div className='graph-stat'>
			<div className="graph-stat__header">
				<h1 className="graph-stat__title">{state.title}</h1>
				<div className="graph-stat__radios radio-graph">
					{listRadios}
				</div>
				<DayDropDown
					state={state.days}
					icon={state.iconArrow}
				/>
			</div>
			<Suspense fallback={<Loading />}>
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