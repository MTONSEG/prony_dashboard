import React from 'react';
import BigTitle from '../../UI/BigTitle/BigTitle';
import { dashboardScreen } from '../../../store';
import './Dashboard.scss';
import ItemStat from './ItemStat/ItemStat';
import ActivitiesStat from './ActivitiesStat/ActivitiesStat';
import GraphStat from './GraphStat/GraphStat';
import { useState } from 'react';

const Dashboard = ({ state }) => {
	let [dashState, setDashState] = useState(dashboardScreen);

	let statItems = dashState.statList.map((el, i) => (
		<ItemStat
			key={i}
			title={el.title}
			value={el.value}
		/>
	))

	return (
		<main className="dashboard">
			<BigTitle className={'dashboard__title'}>{dashState.title}</BigTitle>
			<div className="dashboard__body">
				<div className="dashboard__stat">
					<ul className="dashboard__stat-list">
						{statItems}
					</ul>
					<GraphStat
						state={dashState.graph} />
				</div>
				<ActivitiesStat
					state={dashState.activities}
					className="dashboard__activities" />
			</div>
		</main>
	)
}

export default Dashboard;