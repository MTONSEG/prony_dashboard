import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer
} from "recharts";

const GraphStatCharts = ({ state, selectedStatRadio }) => {
	return (
		<div className="graph-stat__body">
			{
				selectedStatRadio === 'users'
					? <ResponsiveContainer>
						<AreaChart data={state.usersData}>
							<defs>
								<linearGradient id='gradient' gradientTransform="rotate(90)">
									<stop offset="50%" stopColor="rgba(3, 184, 253, 0.46)" />
									<stop offset="100%" stopColor="rgba(3, 184, 253, 0.1)" />
								</linearGradient>
							</defs>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis dataKey="users" />
							<Tooltip
								itemStyle={{
									color: '#fff'
								}}
								contentStyle={{
									background: '#2C629E',
									border: 0,
									borderRadius: '5px',
									color: '#fff'
								}}
							/>
							<Area
								type="monotone"
								dataKey="users"
								stroke="#1565C0"
								fill="url(#gradient)" />
						</AreaChart>
					</ResponsiveContainer>
					: <></>
			}

			{
				selectedStatRadio === 'voters'
					? <ResponsiveContainer>
						<AreaChart data={state.votersData}>
							<defs>
								<linearGradient id='gradient2' gradientTransform="rotate(90)">
									<stop offset="50%" stopColor="rgba(66, 161, 71, 0.5)" />
									<stop offset="100%" stopColor="rgba(66, 161, 71, 0.1)" />
								</linearGradient>
							</defs>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis dataKey="voters" />
							<Tooltip
								itemStyle={{
									color: '#fff'
								}}
								contentStyle={{
									background: '#2C629E',
									border: 0,
									borderRadius: '5px',
									color: '#fff'
								}}
							/>
							<Area
								type="monotone"
								dataKey="voters"
								stroke="#43A047"
								fill="url(#gradient2)" />
						</AreaChart>
					</ResponsiveContainer>
					: <></>
			}
			{
				selectedStatRadio === 'posts'
					? <ResponsiveContainer>
						<AreaChart data={state.postsData}>
							<defs>
								<linearGradient id='gradient3' gradientTransform="rotate(90)">
									<stop offset="50%" stopColor="rgba(255, 153, 0, 0.6" />
									<stop offset="100%" stopColor="rgba(255, 153, 0, 0.1" />
								</linearGradient>
							</defs>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis dataKey="posts" />
							<Tooltip
								itemStyle={{
									color: '#fff'
								}}
								contentStyle={{
									background: '#2C629E',
									border: 0,
									borderRadius: '5px',
									color: '#fff'
								}}
							/>
							<Area
								type="monotone"
								dataKey="posts"
								stroke="#FF9800"
								fill="url(#gradient3)" />
						</AreaChart>
					</ResponsiveContainer>
					: <></>
			}
		</div>
	)
}

export default GraphStatCharts;