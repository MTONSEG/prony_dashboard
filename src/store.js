import logo from './assets/icons/logo.svg';
import iconTabArrow from './assets/icons/arrow-tab.svg';
import photoUserHeader from './assets/images/header_photo.jpg';
import photoDashActivity1 from './assets/images/dashboard_photo-1_activity.jpg';
import photoDashActivity2 from './assets/images/dashboard_photo-2_activity.jpg';
import { v1 } from 'uuid';

const images = {
	logo: logo,
	iconTabArrow: iconTabArrow,
	header: {
		photoUserHeader: photoUserHeader
	},
	dashboard: {
		photoDashActivity1: photoDashActivity1,
		photoDashActivity2: photoDashActivity2
	}
}

export const navbarStore = {
	logo: images.logo,
	setting: {
		title: 'Settings',
		icon: images.iconTabArrow,
		list: ['Settings 1', 'Settings 2', 'Settings 3']
	},
}

export const headerStore = {
	theme: {
		defaultTheme: 'day',
		name: 'theme',
		dayText: 'Day theme',
		nightText: 'Night theme'
	},
	user: {
		photo: images.header.photoUserHeader,
		name: 'Lucy Lavender',
		status: true
	}
}

export const dashboardScreen = {
	title: 'Dashboard',
	statList: [
		{
			title: 'Boards',
			value: 123,
		},
		{
			title: 'Users',
			value: 1623,
		},
		{
			title: 'Posts',
			value: 1623,
		},
		{
			title: 'Votes',
			value: 1623,
		},
	],
	activities: {
		title: 'Activities',
		moreBtn: 'View more',
		list: [
			{
				id: v1(),
				image: images.dashboard.photoDashActivity1,
				name: 'Sophia-Rose Nava',
				date: '6 min ago',
				active: 'upvoted',
				title: 'Welcome to Nolt #1',
			},
			{
				id: v1(),
				image: images.dashboard.photoDashActivity2,
				name: 'Yuvaan Whittington',
				date: '38 min ago',
				active: 'commented',
				title: 'Tips and Tricks #2',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				id: v1(),
				image: images.dashboard.photoDashActivity1,
				name: 'Sophia-Rose Nava',
				date: '6 min ago',
				active: 'upvoted',
				title: 'Welcome to Nolt #1',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				id: v1(),
				image: images.dashboard.photoDashActivity2,
				name: 'Yuvaan Whittington',
				date: '38 min ago',
				active: 'commented',
				title: 'Tips and Tricks #2',
			},
		]
	},
	graph: {
		title: 'Statistic',
		defValue: 'users',
		usersText: 'Users',
		votesText: 'Voters',
		postsText: 'Posts',
		usersData: [
			{
				name: "Jan",
				users: 1500,
			},
			{
				name: "Feb",
				users: 2500,
			},
			{
				name: "Mar",
				users: 5200,
			},
			{
				name: "Apr",
				users: 6300,
			},
			{
				name: "May",
				users: 4890,
			},
			{
				name: "Jun",
				users: 7390,
			},
			{
				name: "Jul",
				users: 8490,
			},
			{
				name: "Aug",
				users: 5890,
			},
			{
				name: "Oct",
				users: 10390,
			},
			{
				name: "Nov",
				users: 6390,
			},
			{
				name: "Dec",
				users: 8790,
			},
		],
		votersData: [
			{
				name: "Jan",
				voters: 100,
			},
			{
				name: "Feb",
				voters: 2500,
			},
			{
				name: "Mar",
				voters: 4200,
			},
			{
				name: "Apr",
				voters: 5300,
			},
			{
				name: "May",
				voters: 1890,
			},
			{
				name: "Jun",
				voters: 390,
			},
			{
				name: "Jul",
				voters: 8490,
			},
			{
				name: "Aug",
				voters: 5890,
			},
			{
				name: "Oct",
				voters: 13930,
			},
			{
				name: "Nov",
				voters: 690,
			},
			{
				name: "Dec",
				voters: 8790,
			},
		],
		postsData: [
			{
				name: "Jan",
				posts: 1300,
			},
			{
				name: "Feb",
				posts: 200,
			},
			{
				name: "Mar",
				posts: 42200,
			},
			{
				name: "Apr",
				posts: 53200,
			},
			{
				name: "May",
				posts: 18930,
			},
			{
				name: "Jun",
				posts: 33390,
			},
			{
				name: "Jul",
				posts: 84930,
			},
			{
				name: "Aug",
				posts: 58390,
			},
			{
				name: "Oct",
				posts: 13230,
			},
			{
				name: "Nov",
				posts: 69303,
			},
			{
				name: "Dec",
				posts: 8790,
			},
		],
	}
}

export const store = {
	headerStore: headerStore,
	navbarStore: navbarStore
}