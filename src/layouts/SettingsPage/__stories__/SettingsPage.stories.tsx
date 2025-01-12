// tslint:disable:no-console
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

import { SettingsPageProps } from '../';
import SettingsPageDesktop from '../SettingsPageDesktop';
import SettingsPageMobile from '../SettingsPageMobile';

// const SettingsPage = getComponent('SettingsPage');

const item: SettingsPageProps = {
	name: 'AppearanceSettingsPage',
	path: 'appearance',

	items: [
		{
			component: 'AppearanceSettingList',
			description: 'All your theme related settings reside here.',
			name: 'appearance',
			title: 'Appearance',
		},
		{
			component: 'LanguageSettingList',
			description: 'Change your language settings here',
			name: 'language',
			title: 'Language',
		},
	],

	options: {
		title: 'Appearance',
	},
};

storiesOf('Layouts / SettingsPage', module)
	.add('Mobile View', () => <SettingsPageMobile {...item} />)

	.add('Desktop View', () => <SettingsPageDesktop {...item} isMobile={false} />);
