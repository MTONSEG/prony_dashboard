import { v1 } from 'uuid';
import logo from './assets/icons/logo.svg';
import iconTabArrow from './assets/icons/arrow-tab.svg';
import photoUserHeader from './assets/images/header_photo.jpg';
import photoDashActivity1 from './assets/images/dashboard_photo-1_activity.jpg';
import photoDashActivity2 from './assets/images/dashboard_photo-2_activity.jpg';
import iconArrowGrey from './assets/icons/arrow-grey-down.svg';
import iconDragAndDrop from './assets/icons/grag-drop-icon.svg';
import postPhoto1 from './assets/images/posts_photo-1.jpg';
import postPhoto2 from './assets/images/posts_photo-2.jpg';
import postPhoto3 from './assets/images/posts_photo-3.jpg';
import postPhoto4 from './assets/images/posts_photo-4.jpg';
import postPhoto5 from './assets/images/posts_photo-5.jpg';
import uploadedImage from './assets/images/uploaded.jpg';
import imagePostView from './assets/images/view-post_image.jpg';
import commentImage from './assets/images/comment__image.jpg';
import commentPhoto1 from './assets/images/comment_photo1.jpg';
import commentPhoto2 from './assets/images/comment_photo2.jpg';
import commentPhoto3 from './assets/images/comment_photo3.jpg';
import commentPhoto4 from './assets/images/comment_photo4.jpg';
import commentPhoto5 from './assets/images/comment_photo-reply.jpg';
import commentPhoto6 from './assets/images/comment_photo-merge.jpg';
import userPhoto from './assets/images/user-photo.jpg';
import langFlagUsa from './assets/icons/usa.svg';
import langFlagGermany from './assets/icons/germany.svg';


const images = {
	logo: logo,
	iconTabArrow: iconTabArrow,
	userPhoto: userPhoto,
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
	},
	posts: {
		postPhoto1: postPhoto1,
		postPhoto2: postPhoto2,
		postPhoto3: postPhoto3,
		postPhoto4: postPhoto4,
		postPhoto5: postPhoto5
	},
	createPost: {
		uploadedImage: uploadedImage,
	},
	postView: {
		imagePostView: imagePostView,
		commentImage: commentImage,
		commentPhoto1: commentPhoto1,
		commentPhoto2: commentPhoto2,
		commentPhoto3: commentPhoto3,
		commentPhoto4: commentPhoto4,
		commentPhoto5: commentPhoto5,
		commentPhoto6: commentPhoto6
	},
	language: {
		usa: langFlagUsa,
		germany: langFlagGermany
	}

}

export const navbarStore = {
	logo: images.logo,
	setting: {
		title: 'Settings',
		icon: images.iconTabArrow,
		list: [
			{
				url: '/settings/general',
				title: 'General'
			},
			{
				url: '/settings/appearance',
				title: 'Appearance'
			},
			{
				url: '/changelog/settings',
				title: 'Changelog'
			},
			{
				url: '/settings/domain',
				title: 'Custom domain'
			},
			{
				url: '/settings/email',
				title: 'Email'
			},
			{
				url: '/settings/sso',
				title: 'SSO'
			},
		]
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

export const postList = {
	title: 'Posts',
	titleBtn: 'Create post',
	filters: {
		created: {
			title: 'Created in',
			list: [
				'Last 24 hours',
				'Last week',
				'Last month'
			]
		},
		authors: {
			title: 'Authors',
			list: ['Author Name 1', 'Author Name 1'],
		},
		statuses: {
			title: 'Statuses',
			list: ['No status', 'Status 1', 'Status 2']
		},
		owners: {
			title: 'Owners',
			list: ['John', 'Simon', 'Henry']
		},
		boards: {
			title: 'Boards',
			list: ['Board name1', 'Board name2', 'Board name3']
		},
		tags: {
			title: 'Tags',
			list: ['Tags 1', 'Tags 2', 'Tags 3']
		},
		segments: {
			title: 'Segments',
			list: ['Segments1', 'Segments2', 'Segments3']
		},
		approved: {
			title: 'Approved',
			list: ['Approved1', 'Approved2', 'Approved3']
		},
		merges: {
			title: 'Merges this post into another post',
			ph: 'Enter post name',
		},
		sortList: ['Newest', 'Oldest', 'Users'],
		showList: ['10', '15', '20'],

	},
	posts: [
		{
			id: v1(),
			name: 'Konnor Castro',
			photo: images.posts.postPhoto1,
			title: 'Send status updates back through Intercom',
			text: 'Instead of send updates via email, send them through the original conversation on Intercom nstead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
			likeNum: 24,
			messNum: 48,
			time: '3 min ago',
			tags: [
				{
					title: 'Tagname1',
					color: '#EB5757',
				},
				{
					title: 'Tagname2',
					color: '#27AE60',
				},
			]
		},
		{
			id: v1(),
			name: 'Bryson Casey',
			photo: images.posts.postPhoto2,
			title: 'Send status updates back through Intercom',
			text: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
			likeNum: 24,
			messNum: 48,
			time: '3 min ago',
			tags: [
				{
					title: 'Tagname1',
					color: '#27AE60',
				},
				{
					title: 'Tagname2',
					color: '#EB5757',
				},
			]
		},
		{
			id: v1(),
			name: 'Montana Leon',
			photo: images.posts.postPhoto3,
			title: 'Send status updates back through Intercom',
			text: 'Instead of send updates via email, send them through the originalconversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
			likeNum: 24,
			messNum: 48,
			time: '3 min ago',
			tags: [
				{
					title: 'Tagname1',
					color: '#EB5757',
				},
				{
					title: 'Tagname2',
					color: '#27AE60',
				},
			]
		},
		{
			id: v1(),
			name: 'Sophia-Rose Nava',
			photo: images.posts.postPhoto4,
			title: 'Send status updates back through Intercom',
			text: 'Instead of send updates via email, send them through the originalconversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
			likeNum: 24,
			messNum: 48,
			time: '3 min ago',
			tags: [
				{
					title: 'Tagname1',
					color: '#27AE60',
				}
			]
		},
		{
			id: v1(),
			name: 'Kasim Daniels',
			photo: images.posts.postPhoto5,
			title: 'Send status updates back through Intercom',
			text: 'Instead of send updates via email, send them through the originalconversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
			likeNum: 24,
			messNum: 48,
			time: '3 min ago',
			tags: [
				{
					title: 'Tagname1',
					color: '#27AE60',
				},
				{
					title: 'Tagname2',
					color: '#EB5757',
				},
			]
		},
		{
			id: v1(),
			name: 'Safaa Marriotts',
			photo: images.posts.postPhoto2,
			title: 'Send status updates back through Intercom',
			text: 'Instead of send updates via email, send them through the originalconversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
			likeNum: 24,
			messNum: 48,
			time: '3 min ago',
			tags: [
				{
					title: 'Tagname1',
					color: '#EB5757',
				}
			]
		},
	]
}

export const createPost = {
	title: 'Create post',
	boardName: {
		title: 'Board name',
		list: ['1 board', '21 board', '31 board'],
	},
	postTitle: {
		title: 'Title',
		placeholder: 'Enter post title'
	},
	detailes: {
		title: 'Detailes',
		placeholder: 'Enter detailes'
	},
	upload: {
		title: 'Image',
		image: images.createPost.uploadedImage,
	},
	owner: {
		title: 'Owner',
		list: ['Jack', 'John', 'Charly'],
	},
	status: {
		title: 'Status',
		list: ['first status', 'last-status']
	}

}

export const editPost = {
	title: 'Edit post',
	boardName: {
		title: 'Board name',
		list: ['1 board', '21 board', '31 board'],
	},
	postTitle: {
		title: 'Title',
		placeholder: 'Enter post title'
	},
	detailes: {
		title: 'Detailes',
		placeholder: 'Enter detailes'
	},
	upload: {
		title: 'Image',
		image: images.createPost.uploadedImage,
	},
	owner: {
		title: 'Owner',
		list: ['Jack', 'John', 'Charly'],
	},
	status: {
		title: 'Status',
		list: ['first status', 'last-status']
	}

}

export const postView = {
	title: 'Post view',
	viewPost: {
		name: 'Ross Gillespie',
		photo: images.posts.postPhoto1,
		title: 'Send status updates back through Intercom',
		time: '3 min ago',
		status: 'Complete',
		text: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
		image: images.postView.imagePostView,
		amountLikes: '24',
		tags: [
			{
				title: 'Tagname1',
				color: '#EB5757',
			},
			{
				title: 'Tagname2',
				color: '#27AE60',
			},
		],
		placeholder: 'Enter detailes',
		upload: {
			title: 'Image',
			image: images.createPost.uploadedImage,
		},
		privacy: {
			title: 'Privacy',
			list: [
				{
					title: 'Public',
					value: 'public'
				},
				{
					title: 'Private',
					value: 'private'
				},
			]
		},
		sortList: ['Recent', 'Private', 'Public']
	},
	messages: [
		{
			id: v1(),
			photo: images.postView.commentPhoto1,
			name: 'Sophia-Rose Nava',
			message: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
			amountLikes: 3,
			date: '01-02-2020',
			privacy: true,
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto2,
			name: 'Anna Walley',
			message: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
			amountLikes: 3,
			date: '01-02-2020',
			privacy: false,
			reply: [{
				id: v1(),
				photo: images.postView.commentPhoto5,
				name: 'Uzair Valdez',
				message: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
				amountLikes: 3,
				date: '01-02-2020',
				privacy: false,
			},],
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto3,
			name: 'Kaylan Graham',
			amountLikes: 3,
			date: '01-02-2020',
			privacy: false,
			merge: [
				{
					id: v1(),
					photo: images.postView.commentPhoto6,
					name: 'Anna Walley',
					message: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
					amountLikes: 3,
					date: '01-02-2020',
					privacy: false,
				},
			],
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto4,
			name: 'Kasim Daniels',
			message: 'Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom',
			amountLikes: 3,
			date: '01-02-2020',
			privacy: false,
			image: images.postView.commentImage
		},
	]
}

export const voters = {
	title: 'Voters for',
	subtitle: '“Send status updates back through Intercom”',
	export: 'Export',
	popupText: 'Are you sure you would like to delete this vote?',
	list: [
		{
			id: v1(),
			name: 'Sophia-Rose Nava',
			photo: images.postView.commentPhoto1,
			date: '6 days ago'
		},
		{
			id: v1(),
			name: 'Yuvaan Whittington',
			photo: images.postView.commentPhoto2,
			date: '6 days ago'
		},
		{
			id: v1(),
			name: 'Kristopher Winter',
			photo: images.postView.commentPhoto3,
			date: '6 days ago'
		},
		{
			id: v1(),
			name: 'Amal Gamble',
			photo: images.postView.commentPhoto4,
			date: '6 days ago'
		},
		{
			id: v1(),
			name: 'Amanah Mcneill',
			photo: images.postView.commentPhoto5,
			date: '6 days ago'
		},
		{
			id: v1(),
			name: 'Anna Walley',
			photo: images.postView.commentPhoto6,
			date: '6 days ago'
		},
		{
			id: v1(),
			name: 'Ashraf Ryder',
			photo: images.postView.commentPhoto3,
			date: '6 days ago'
		},
		{
			id: v1(),
			name: 'Clarke Wickens',
			photo: images.postView.commentPhoto1,
			date: '6 days ago'
		}
	]
}

export const importPost = {
	title: 'Import post',
	uploadTitle: 'File',
	board: {
		title: 'Board selected',
		list: ['1 board', '2 board', '3 board']
	}
}

export const tagScreen = {
	title: 'Tags',
	titleBtn: 'Add tag',
	list: [
		{
			id: v1(),
			title: 'Tagname1',
			color: '#F44336',
			privacy: 'public'
		},
		{
			id: v1(),
			title: 'Tagname1',
			color: '#1565C0',
			privacy: 'private'
		},
		{
			id: v1(),
			title: 'Tagname1',
			color: '#43A047',
			privacy: 'public'
		},
		{
			id: v1(),
			title: 'Tagname1',
			color: '#BB6BD9',
			privacy: 'private'
		},
		{
			id: v1(),
			title: 'Tagname1',
			color: ' #C4C4C4',
			privacy: 'public'
		},
	]
}

export const editTag = {
	title: 'Edit tag',
	name: {
		title: 'Name',
		value: 'Tagname1',
		ph: 'Enter tagname'
	},
	colors: {
		title: 'Colors',
		list: [
			{
				id: v1(),
				clicked: false,
				color: '#B71C1C'
			},
			{
				id: v1(),
				clicked: false,
				color: '#DE3B31'
			},
			{
				id: v1(),
				clicked: false,
				color: '#FF6B62'
			},
			{
				id: v1(),
				clicked: false,
				color: '#43A047'
			},
			{
				id: v1(),
				clicked: false,
				color: '#62C966'
			},
			{
				id: v1(),
				clicked: false,
				color: '#ADF1B0'
			},
			{
				id: v1(),
				clicked: false,
				color: '#0F498C'
			},
			{
				id: v1(),
				clicked: false,
				color: '#1565C0'
			},
			{
				id: v1(),
				clicked: false,
				color: '#4A98F1'
			},
			{
				id: v1(),
				clicked: false,
				color: '#A4CEFF'
			},
			{
				id: v1(),
				clicked: false,
				color: '#FF9800'
			},
			{
				id: v1(),
				clicked: false,
				color: '#FFD600'
			},
			{
				id: v1(),
				clicked: false,
				color: '#FFED8D'
			},
			{
				id: v1(),
				clicked: false,
				color: '#474747'
			},
			{
				id: v1(),
				clicked: false,
				color: '#818181'
			},
			{
				id: v1(),
				clicked: false,
				color: '#CCCCCC'
			},
			{
				id: v1(),
				clicked: false,
				color: '#6D28AE'
			},
			{
				id: v1(),
				clicked: false,
				color: '#A258E7'
			},
			{
				id: v1(),
				clicked: false,
				color: '#CD98FF'
			},
			{
				id: v1(),
				clicked: false,
				color: '#E6CBFF'
			},

		],
	},
	privacy: {
		title: 'Privacy',
		text: 'Private tags are only visible to moderators.',
		list: [
			{
				title: 'Public',
				value: 'public'
			},
			{
				title: 'Private',
				value: 'private'
			},
		]
	}
}

export const replaceTag = {
	title: 'Replace tag',
	formData: {
		title: 'Replaces Tagname1 tag with another tag',
		ph: 'Select tag',
		list: ['Select tag', 'Tagname1', 'Tagname2']
	}
}

export const userList = {
	title: 'Users',
	segments: {
		title: 'User segments',
		list: ['Segment1', 'Segment2', 'Segment3']
	},
	role: {
		title: 'Role',
		list: ['Role1', 'Role2', 'Role3']
	},
	mail: {
		title: 'E-mail',
		list: ['Enter e-mail', 'test@mail.ru', 'admin@prony.io']
	},
	firstName: {
		title: 'First name',
		list: ['First name 1', 'First name 2', 'First name 3']
	},
	lastName: {
		title: 'Last name',
		list: ['Last Name 1', 'Last Name 2', 'Last Name 3']
	},
	banned: {
		title: 'Banned',
		value: true
	},
	sortList: ['Last activity', 'Forst activity', 'Other'],
	showList: ['10', '15', '20'],
	users: [
		{
			id: v1(),
			photo: images.postView.commentPhoto1,
			name: 'Kairo Bruce',
			mail: 'anna_w@gmail.com',
			date: '21-01-2019',
			status: 'Admin',
			postNum: '23',
			likesNum: '123',
			messNum: '64'
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto2,
			name: 'Lowri Leach',
			mail: 'anna_w@gmail.com',
			date: '21-01-2019',
			status: 'Admin',
			postNum: '23',
			likesNum: '123',
			messNum: '64'
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto3,
			name: 'Maria Gallegos',
			mail: 'anna_w@gmail.com',
			date: '21-01-2019',
			status: 'Member',
			postNum: '23',
			likesNum: '123',
			messNum: '64'
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto4,
			name: 'Kristopher Winter',
			mail: 'anna_w@gmail.com',
			date: '21-01-2019',
			status: 'Admin',
			postNum: '23',
			likesNum: '123',
			messNum: '64'
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto5,
			name: 'Yuvaan Whittington',
			mail: 'anna_w@gmail.com',
			date: '21-01-2019',
			status: 'Member',
			postNum: '23',
			likesNum: '123',
			messNum: '64'
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto6,
			name: 'Clarke Wickens',
			mail: 'anna_w@gmail.com',
			date: '21-01-2019',
			status: 'Admin',
			postNum: '23',
			likesNum: '123',
			messNum: '64'
		},
	]
}

export const userDetails = {
	title: 'User Details',
	photo: images.userPhoto,
	name: 'Kairo Bruce',
	mail: 'anna_w@gmail.com',
	date: '21-01-2019',
	status: 'Admin',
	postNum: {
		title: 'Posts',
		value: '123',
	},
	likesNum: {
		title: 'Votes',
		value: '1023'
	},
	messNum: {
		title: 'Comments',
		value: '1064'
	},
	posts: {
		title: '10 last posts',
		list: [
			{
				id: v1(),
				num: 123,
				title: 'How do I put an \'if clause\' in an SQL string?',
				date: '21-01-2019',
			},
			{
				id: v1(),
				num: 123,
				title: 'SQL “between” not inclusive',
				date: '21-01-2019',
			},
			{
				id: v1(),
				num: 123,
				title: 'Is there a performance difference between CTE , Sub-Query, Temporary Table or Table Variable?',
				date: '21-01-2019',
			},
			{
				id: v1(),
				num: 123,
				title: 'Is there a LastIndexOf in SQL Server?',
				date: '21-01-2019',
			},
			{
				id: v1(),
				num: 123,
				title: 'How do I put an \'if clause\' in an SQL string?',
				date: '21-01-2019',
			},
			{
				id: v1(),
				num: 123,
				title: 'SQL “between” not inclusive',
				date: '21-01-2019',
			},
			{
				id: v1(),
				num: 123,
				title: 'Is there a performance difference between CTE , Sub-Query, Temporary Table or Table Variable?',
				date: '21-01-2019',
			},
			{
				id: v1(),
				num: 123,
				title: 'Is there a LastIndexOf in SQL Server?',
				date: '21-01-2019',
			},
			{
				id: v1(),
				num: 123,
				title: 'Is there a performance difference between CTE , Sub-Query, Temporary Table or Table Variable?',
				date: '21-01-2019',
			},
			{
				id: v1(),
				num: 123,
				title: 'Is there a LastIndexOf in SQL Server?',
				date: '21-01-2019',
			},
		]
	},
	votes: {
		title: '10 last Votes',
		list: [
			{
				id: v1(),
				title: 'How do I put an \'if clause\' in an SQL string?',
				date: '21-01-2019',
			},
			{
				id: v1(),
				title: 'SQL “between” not inclusive',
				date: '21-01-2019',
			},
			{
				id: v1(),
				title: 'Is there a performance difference between CTE , Sub-Query, Temporary Table or Table Variable?',
				date: '21-01-2019',
			},
			{
				id: v1(),
				title: 'Is there a LastIndexOf in SQL Server?',
				date: '21-01-2019',
			},
			{
				id: v1(),
				title: 'How do I put an \'if clause\' in an SQL string?',
				date: '21-01-2019',
			},
			{
				id: v1(),
				title: 'SQL “between” not inclusive',
				date: '21-01-2019',
			},
			{
				id: v1(),
				title: 'Is there a performance difference between CTE , Sub-Query, Temporary Table or Table Variable?',
				date: '21-01-2019',
			},
			{
				id: v1(),
				title: 'Is there a LastIndexOf in SQL Server?',
				date: '21-01-2019',
			},
			{
				id: v1(),
				title: 'Is there a performance difference between CTE , Sub-Query, Temporary Table or Table Variable?',
				date: '21-01-2019',
			},
			{
				id: v1(),
				title: 'Is there a LastIndexOf in SQL Server?',
				date: '21-01-2019',
			},
		]
	}
}

export const userActivity = {
	title: 'Activities',
	list: [
		{
			id: v1(),
			photo: images.postView.commentPhoto1,
			name: 'Sophia-Rose Nava',
			activity: 'upvoted',
			time: '6 min ago',
			title: 'Welcome to Nolt #1',
			text: ''
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto2,
			name: 'Yuvaan Whittington',
			activity: 'upvoted',
			time: '38 min ago',
			title: 'Tips and Tricks #2',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto1,
			name: 'Sophia-Rose Nava',
			activity: 'upvoted',
			time: '56 min ago',
			title: 'Welcome to Nolt #1',
			text: ''
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto2,
			name: 'Yuvaan Whittington',
			activity: 'upvoted',
			time: '1 day ago',
			title: 'Tips and Tricks #2',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto1,
			name: 'Sophia-Rose Nava',
			activity: 'upvoted',
			time: '1 day ago',
			title: 'Welcome to Nolt #1',
			text: ''
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto2,
			name: 'Yuvaan Whittington',
			activity: 'upvoted',
			time: '1 day ago',
			title: 'Tips and Tricks #2',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto1,
			name: 'Sophia-Rose Nava',
			activity: 'upvoted',
			time: '1 day ago',
			title: 'Welcome to Nolt #1',
			text: ''
		},
		{
			id: v1(),
			photo: images.postView.commentPhoto2,
			name: 'Yuvaan Whittington',
			activity: 'upvoted',
			time: '1 day ago',
			title: 'Tips and Tricks #2',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
	]
}

export const userSegments = {
	title: 'User Segments',
	titleBtn: 'Add new segment',
	list: [
		{
			id: v1(),
			name: 'Segment Name 1',
			representation: 'company is “value”'
		},
		{
			id: v1(),
			name: 'Segment Name 1',
			representation: 'created after “value”'
		},
		{
			id: v1(),
			name: 'Segment Name 1',
			representation: 'company is “value”'
		},
		{
			id: v1(),
			name: 'Segment Name 1',
			representation: 'company is “value”'
		},
		{
			id: v1(),
			name: 'Segment Name 1',
			representation: 'company is “value”'
		},
	]
}

export const addSegments = {
	title: 'Add user segment',
	titleEdit: 'Edit user segment',
	name: {
		title: 'Name',
		ph: 'Enter user segment name'
	},
	company: ['Company', 'Created'],
	is: ['is', 'on', 'in'],
	value: {
		title: 'value'
	},
	attr: ['Select attribute', 'Select attribute 2', 'Select attribute 3']
}

export const listStatus = {
	title: 'Statuses',
	titleBtn: 'Add status',
	titleReset: 'Reset to default',
	list: [
		{
			id: v1(),
			name: 'Segment Name 1',
			votable: true,
			roadmap: false,
			privacy: true,
			color: '#43A047'
		},
		{
			id: v1(),
			name: 'Archived',
			votable: false,
			roadmap: true,
			privacy: false,
			color: '#E0E0E0'
		},
		{
			id: v1(),
			name: 'Segment Name 1',
			votable: true,
			roadmap: false,
			privacy: true,
			color: '#E65100'
		},
	]
}

export const addStatus = {
	title: 'Add status',
	titleEdit: 'Edit status',
	name: {
		title: 'Name',
		ph: 'Enter status name'
	},
	checkboxes: [
		{
			title: 'Votable',
			text: 'Defines if posts in this status can get votes',
			value: true
		},
		{
			title: 'Show on roadmap',
			text: 'Defines if posts in this status should be added to the roadmap',
			value: false,
		}
	],
	privacy: {
		title: 'Privacy',
		text: 'Privacy flag that defines post visibility and tag visibility at the board',
		list: [
			{
				title: 'Public',
				value: 'public',
			},
			{
				title: 'Private',
				value: 'private'
			}
		]
	},
	colors: editTag.colors
}

export const listChangelog = {
	title: 'Changelog records',
	titleBtn: 'Add record',
	labels: {
		title: 'Labels',
		list: ['Labels', 'Label1', 'Label2']
	},
	time: {
		title: 'Publish time',
		list: ['Publish time', 'Publish time 2', 'Publish time 3']
	},
	showList: ['10', '15', '20'],
	list: [
		{
			id: v1(),
			title: 'Send status updates back through Intercom',
			time: '2 weeks ago',
			labels: [
				{
					title: 'Admin',
					color: '#272557',
					bg: '#BFBECD'
				},
				{
					title: 'Feedback',
					color: '#fff',
					bg: '#03B8FD'
				}
			]
		},
		{
			id: v1(),
			title: 'Send status updates back through Intercom',
			time: 'yesterday',
			labels: [
				{
					title: 'Admin',
					color: '#272557',
					bg: '#BFBECD'
				}
			]
		},
		{
			id: v1(),
			title: 'Send status updates back through Intercom',
			time: '32 min ago',
			labels: [
				{
					title: 'Admin',
					color: '#272557',
					bg: '#BFBECD'
				},
			]
		},
		{
			id: v1(),
			title: 'Send status updates back through Intercom',
			time: '32 min ago',
			labels: [
				{
					title: 'Admin',
					color: '#272557',
					bg: '#BFBECD'
				},
			]
		},
		{
			id: v1(),
			title: 'Send status updates back through Intercom',
			time: 'last week',
			labels: [
				{
					title: 'Admin',
					color: '#272557',
					bg: '#BFBECD'
				},
			]
		},
		{
			id: v1(),
			title: 'Send status updates back through Intercom',
			time: '2 weeks ago',
			labels: [
				{
					title: 'Admin',
					color: '#272557',
					bg: '#BFBECD'
				},
			]
		},
		{
			id: v1(),
			title: 'Send status updates back through Intercom',
			time: '32 min ago',
			labels: [
				{
					title: 'Admin',
					color: '#272557',
					bg: '#BFBECD'
				},
			]
		},
		{
			id: v1(),
			title: 'Send status updates back through Intercom',
			time: 'last week',
			labels: [
				{
					title: 'Changelog',
					color: '#fff',
					bg: '#546E7A'
				},
				{
					title: 'Admin',
					color: '#272557',
					bg: '#BFBECD'
				},
			]
		},
		{
			id: v1(),
			title: 'Send status updates back through Intercom',
			time: '2 weeks ago',
			labels: [
				{
					title: 'Admin',
					color: '#272557',
					bg: '#BFBECD'
				},
			]
		},
		{
			id: v1(),
			title: 'Send status updates back through Intercom',
			time: 'last week',
			labels: [
				{
					title: 'Admin',
					color: '#272557',
					bg: '#BFBECD'
				},
			]
		},
	]
}

export const addRecord = {
	title: 'Add record',
	titleEdit: 'Edit record',
	name: {
		title: 'Title',
		ph: 'Title',
	},
	details: {
		title: 'Detailes',
		ph: 'Detailes'
	},
	labels: {
		title: 'Labels',
		list: ['Chose a label', 'Admin', 'Feedback', 'Changelog'],
		items: [
			{
				title: 'Admin',
				color: '#272557',
				bg: '#BFBECD'
			},
			{
				title: 'Feedback',
				color: '#fff',
				bg: '#03B8FD'
			}
		]
	},
	upload: {
		title: 'Image',
		image: images.createPost.uploadedImage,
	},
}

export const labelList = {
	title: 'Changelog Labels',
	titleBtn: 'Add label',
	list: [
		{
			id: v1(),
			title: 'Changelog',
			color: '#fff',
			bg: '#546E7A'
		},
		{
			id: v1(),
			title: 'Feedback',
			color: '#fff',
			bg: '#03B8FD'
		},
		{
			id: v1(),
			title: 'Admin',
			color: '#272557',
			bg: '#BFBECD',
		},
	]
}

export const addLabel = {
	title: 'Adds new changelog label',
	titleEdit: 'Edit changelog label',
	name: {
		title: 'Name',
		ph: 'Enter status name'
	},
	colors: {
		title: 'Color',
		list: [
			{
				id: v1(),
				color: '#546E7A',
				clicked: false
			},
			{
				id: v1(),
				color: '#03B8FD',
				clicked: false
			},
			{
				id: v1(),
				color: '#BFBECD',
				clicked: false
			},
			{
				id: v1(),
				color: '#272557',
				clicked: false
			},
			{
				id: v1(),
				color: '#2C629E',
				clicked: false
			},
			{
				id: v1(),
				color: '#435B66',
				clicked: false
			},
		]
	}
}

export const settings = {
	changelog: {
		title: 'Changelog settings',
		privacy: {
			title: 'Privacy',
			list: [
				{
					id: v1(),
					title: 'Public',
					text: 'Show this changelog on the public view so all users can find and access it.',
					value: 'public'
				},
				{
					id: v1(),
					title: 'Private',
					text: 'The changelog will not be shown to your users anymore.',
					value: 'private'
				},
			]
		},
		indexed: {
			title: 'Indexed',
			text: 'Changelog will be indexed by search engines like Google. Turn it off if you don’t want that.',
			value: true,
		}
	},
	general: {
		title: 'General settings',
		name: {
			title: 'Name',
			ph: 'Enter status name'
		},
		lang: {
			title: 'Language',
			list: [
				{
					id: v1(),
					title: 'English',
					text: 'English, US',
					value: 'eng1',
					flag: images.language.usa
				},
				{
					id: v1(),
					title: 'German',
					text: 'Deutsch',
					value: 'de1',
					flag: images.language.germany
				},
				{
					id: v1(),
					title: 'English',
					text: 'English, US',
					value: 'eng2',
					flag: images.language.usa
				},
				{
					id: v1(),
					title: 'German',
					text: 'Deutsch',
					value: 'de2',
					flag: images.language.germany
				},
				{
					id: v1(),
					title: 'English',
					text: 'English, US',
					value: 'eng3',
					flag: images.language.usa
				},
				{
					id: v1(),
					title: 'German',
					text: 'Deutsch',
					value: 'de3',
					flag: images.language.germany
				},
			],
		},
		show: {
			title: 'Show on roadmap',
			value: true
		},
		indexed: {
			title: 'Indexed',
			text: 'Changelog will be indexed by search engines like Google. Turn it off if you don’t want that.',
			value: true
		}
	},
	appearance: {
		title: 'Appearance',
		theme: {
			title: 'Theme',
			list: [
				{
					name: 'light',
					bg: '#F9F9FC',
					colors: ['#1565C0', '#E0E0E0', '#272557']
				},
				{
					name: 'dark',
					bg: '#202020',
					colors: ['#1565C0', '#505050', '#fff']
				},
			]
		},
		upload: {

		}
	},
	email: {
		title: 'Email settings',
		user: {
			title: 'User email settings',
			list: [
				{
					id: v1(),
					title: 'Status Change Email',
					text: 'We\'ll email voters when your team changes the status of a Post. When you update the status of a Post, you\'ll see this option to "Notify all voters"',
					value: true
				},
				{
					id: v1(),
					title: 'Admin Responses in Post Comments',
					text: 'We\'ll email voters when your team responds to a Post',
					value: false
				},
				{
					id: v1(),
					title: 'Mention Email',
					text: 'Emails we send when anyone gets @mentioned in a Post',
					value: false
				},
				{
					id: v1(),
					title: 'Weekly User Report',
					text: 'Prony regular user updates regarding new Posts.',
					value: false
				},
			]
		},
		admin: {
			title: 'Admin Report email',
			list: ['Daily', 'Monthly'],
			value: true,
		}
	},
	sso: {
		title: 'SSO',
		defTitle: 'Setup SSO',
		redirect: {
			title: 'Setup SSO redirect',
			steps: [
				{
					step: 1,
					title: 'Remote login URL (optional)',
					text: 'By default, Prony uses its own authentication. If a user is not logged in, we\'ll ask them to create a Prony account. If you want to disable this, and only use accounts from your app, set your SSO remote login URL here.'
				},
				{
					step: 2,
					title: 'Remote login URL (optional)',
					text: 'Redirect SSO users to a specific URL after they log out.'
				},
			]
		}
	},
	domain: {
		title: 'Custom domain',
		
	},
}

export const store = {
	headerStore: headerStore,
	navbarStore: navbarStore
}
