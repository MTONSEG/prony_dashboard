import React from 'react';
import BigTitle from '../../UI/BigTitle/BigTitle';
import { dashboardScreen } from '../../../store';
import './Dashboard.scss';
import ItemStat from './ItemStat/ItemStat';
import ActivitiesStat from './ActivitiesStat/ActivitiesStat';

const Dashboard = ({ state }) => {

	let statItems = dashboardScreen.statList.map((el, i) => (
		<ItemStat
			key={i}
			title={el.title}
			value={el.value}
		/>
	))

	return (
		<main className="dashboard">
			<BigTitle className={'dashboard__title'}>Dashboard </BigTitle>
			<div className="dashboard__body">
				<div className="dashboard__stat">
					<ul className="dashboard__stat-list">
						{statItems}
					</ul>
					
				</div>
				<ActivitiesStat
					state={dashboardScreen.activities}
					className="dashboard__activities" />
			</div>
		</main>
	)
}

export default Dashboard;