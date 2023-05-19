import { v1 } from 'uuid';
import logo from './assets/icons/logo.svg';
import iconTabArrow from './assets/icons/arrow-tab.svg';
import photoUserHeader from './assets/images/header_photo.jpg';
import photoDashActivity1 from './assets/images/dashboard_photo-1_activity.jpg';
import photoDashActivity2 from './assets/images/dashboard_photo-2_activity.jpg';
import iconArrowGrey from './assets/icons/arrow-grey-down.svg';
import iconDragAndDrop from './assets/icons/grag-drop-icon.svg';

const images = {
	logo: logo,
	iconTabArrow: iconTabArrow,
	header: {
		photoUserHeader: photoUserHeader
	},
	dashboard: {
		photoDashActivity1: photoDashActivity1,
		photoDashActivity2: photoDashActivity2,
		iconArrowGrey: iconArrowGrey,
	},
	boards: {
		iconDragAndDrop: iconDragAndDrop,
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
		defaultRadio: 'users',
		iconArrow: images.iconArrowGrey,
		radios: [
			{
				name: 'stat',
				text: 'Users',
				value: 'users',
				color: 'blue',
			},
			{
				name: 'stat',
				text: 'Voters',
				value: 'voters',
				color: 'green',
			},
			{
				name: 'stat',
				text: 'Posts',
				value: 'posts',
				color: 'orange',
			},
		],
		days: ['last 90 days', 'last 60 days', 'last 30 days'],
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
export const boardScreen = {
	title: 'Boards',
	titleBtn: 'Create Board',
	table: {
		nameTitle: 'Name',
		postTitle: 'Posts',
		iconDrag: images.boards.iconDragAndDrop,
		doneMess: 'This is a success message!',
		errorMess: 'You can’t do that mate.',
		list: [
			{
				id: 1,
				title: 'Send status updates back through Intercom',
				amountPosts: 12,
			},
			{
				id: 2,
				title: 'Irure velit veniam nulla consectetur minim.',
				amountPosts: 22,
			},
			{
				id: 3,
				title: 'Eu dolore sit ut non id id aute. ',
				amountPosts: 132,
			},
			{
				id: 4,
				title: 'Veniam nostrud proident cupidatat laborum aliquip cupidatat aute consectetur officia. ',
				amountPosts: 322,
			},
			{
				id: 5,
				title: 'Nostrud in elit voluptate enim ipsum. Voluptate deserunt ipsum id labore dolor sit amet irure Lorem aliqua.',
				amountPosts: 52,
			},
			{
				id: 6,
				title: 'Send status updates back through Intercom',
				amountPosts: 132,
			},
			{
				id: 7,
				title: 'Irure velit veniam nulla consectetur minim.',
				amountPosts: 222,
			},
			{
				id: 8,
				title: 'Eu dolore sit ut non id id aute. ',
				amountPosts: 13,
			},
			{
				id: 9,
				title: 'Aute anim nostrud exercitation proident veniam nostrud proident cupidatat laborum aliquip cupidatat aute consectetur officia. ',
				amountPosts: 322,
			},
			{
				id: 10,
				title: 'Voluptate deserunt ipsum id labore dolor sit amet irure Lorem aliqua.',
				amountPosts: 523,
			},
		],
	},
	create: {
		title: 'Create Board',
		submit: 'Submit',
		cancel: 'Cancel',
		name: {
			title: 'Board name'
		},
		url: {
			title: 'URL',
			defaultValue: 'http://'
		},
		description: {
			title: 'Description'
		}
	},
	edit: {
		title: 'EditBoard',
		submit: 'Submit',
		cancel: 'Cancel',
		name: {
			title: 'Board name',
			value: 'Board Name'
		},
		url: {
			title: 'URL',
			value: 'http://www.prony.io?/board/12312/test123'
		},
		description: {
			title: 'Description',
			value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		privacy: {
			title: 'Privacy',
			list: [
				{
					title: 'Public',
					text: 'The board is visible to anyone. Search engines like Google will index it.',
					value: 'public'
				},
				{
					title: 'Private',
					text: 'Only people added to the board can access it',
					value: 'private'
				}
			],
		},
		status: {
			title: 'Status',
			list: [
				{
					title: 'Locked',
					text: 'Only Board Moderators can create new posts',
					value: 'locked'
				},
				{
					title: 'Unlocked',
					text: 'Anybody can post',
					value: 'unlocked'
				},
			],
		},
		slideCheckboxes: [
			{
				title: 'Board on roadmap',
				text: 'By default, your board is visible on your roadmap. Turn it off if you don’t want your board and its posts to be shown there.',
				checked: false
			},
			{
				title: 'Indexed',
				text: 'By default, your board will be indexed by search engines like Google. Turn it off if you don’t want that',
				checked: true
			},
		],
		checkboxList: [
			{
				title: 'Post require pre approval',
				text: 'All new posts should be approved by moderators before going public',
				checked: false
			},
			{
				title: 'Anonymous voting',
				text: 'Allow anonymous votes',
				checked: true
			},
		],
	},
	delete: {
		title: 'Delete board',
		inputTitle: 'Board name',
		delete: 'Delete',
		cancel: 'Cancel',
		text: 'This action will permanently delete the board and its content and cannot be undone. Please enter the board name to confirm.',
	},
	editPost: {
		title: 'Edit board post form',
		addBtn: 'Add field',
		submit: 'Submit',
		cancel: 'Cancel',
		list: [
			{
				id: v1(),
				type: 'select',
				title: 'Title',
				body: [
					'Enter title',
					'Ea elit veniam non occaecat.',
					'Minim labore laboris in dolore.',
					'Velit labore ipsum mollit tempor laboris nisi pariatur',
					'Eu tempor sint amet ullamco',
					'Elit fugiat qui veniam'
				],
				defaultPrivacy: 'public',
				required: {
					title: 'Required',
					value: false,
				},
				privacy: [
					{
						id: v1(),
						title: 'Public',
						value: 'public'
					},
					{
						id: v1(),
						title: 'Private',
						value: 'private'
					}
				]
			},
			{
				id: v1(),
				title: 'Details',
				type: 'textarea',
				body: 'Enter post title',
				defaultPrivacy: 'public',
				required: {
					title: 'Required',
					value: true,
				},
				privacy: [
					{
						id: v1(),
						title: 'Public',
						value: 'public'
					},
					{
						id: v1(),
						title: 'Private',
						value: 'private'
					}
				]
			},
		],
		popupList: [
			{
				id: v1(),
				title: 'Select',
				subtitle: 'Allows to select a value from the list of predefined values',
			},
			{
				id: v1(),
				title: 'Multi select',
				subtitle: 'Tag posts with one or more values from a list of options',
			},
			{
				id: v1(),
				title: 'Text',
				subtitle: 'Store any additional text data such as names, emails, links',
			},
			{
				id: v1(),
				title: 'Date',
				subtitle: 'Add a ETA to any post',
			},

			{
				id: v1(),
				title: 'Captcha',
				subtitle: 'Defend your board against spam',
			},
		]
	}
}

export const store = {
	headerStore: headerStore,
	navbarStore: navbarStore
}
