import logo from './assets/icons/logo.svg';

const images = {
	logo: logo
}

export const navbarStore = {
	logo: images.logo,
	list: [
		{
			title: 'Dashboard',
			icon: ''
		},
		{
			title: 'Boards',
			icon: ''
		},
		{
			title: 'Posts',
			icon: ''
		},
		{
			title: 'Statuses',
			icon: ''
		},
		{
			title: 'Users',
			icon: ''
		},
		{
			title: 'Changelog',
			icon: ''
		},
	],
	setting: {
		title: 'Settings',
		icon: '',
		list: ['Settings 1', 'Settings 2', 'Settings 3']
	},
	Integrations: {
		title: 'Integrations',
		icon: ''
	}
}

export const headerStore = {
	theme: 'day',
	user: {
		photo: '',
		name: '',
		status: true
	}
}


export const store = {
	headerStore: headerStore,
	navbarStore: navbarStore
}