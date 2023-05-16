import logo from './assets/icons/logo.svg';
import iconTabArrow from './assets/icons/arrow-tab.svg';
import photoUserHeader from './assets/images/header_photo.jpg';

const images = {
	logo: logo,
	iconTabArrow: iconTabArrow,
	header: {
		photoUserHeader: photoUserHeader
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


export const store = {
	headerStore: headerStore,
	navbarStore: navbarStore
}