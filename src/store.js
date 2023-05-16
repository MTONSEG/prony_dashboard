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
	}
}

export const store = {
	headerStore: headerStore,
	navbarStore: navbarStore
}