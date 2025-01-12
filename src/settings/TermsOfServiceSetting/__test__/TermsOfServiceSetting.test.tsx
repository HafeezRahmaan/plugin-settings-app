import { List } from '@bluebase/components';
import { BlueBaseApp, getComponent } from '@bluebase/core';
import MUI from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../index';

const TermsOfServiceSetting = getComponent('TermsOfServiceSetting');

describe('TermsOfServiceSetting', () => {
	it('should render TermsOfServiceSetting', async () => {
		// mount components

		const wrapper: any = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<TermsOfServiceSetting />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'Dialog');

		const onPress: any = wrapper
			.find(List.Item)
			.first()
			.prop('onPress');

		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('title')
		).toBe('Terms of Service');
		expect(
			wrapper
				.find('Dialog')
				.first()
				.prop('visible')
		).toBe(false);

		onPress();
		wrapper.update();

		expect(
			wrapper
				.find('Dialog')
				.first()
				.prop('visible')
		).toBe(true);

		expect(wrapper.find('TermsOfService').exists()).toBe(true);
		wrapper.unmount();
	});
});
