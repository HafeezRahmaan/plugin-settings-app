import { Divider, View } from '@bluebase/components';
import { Theme, useFilter, useStyles } from '@bluebase/core';
import get from 'lodash.get';
import React from 'react';
import { SafeAreaView, ScrollView, ViewStyle } from 'react-native';

import { SettingsPageProps } from '../SettingsPage';
import { SettingsPageItemMobile, SettingsPageItemProps } from '../SettingsPageItem';

export interface SettingsPageMobileStyles {
	root: ViewStyle;
}

export interface SettingsPageMobileProps extends SettingsPageProps {
	styles?: Partial<SettingsPageMobileStyles>;
}

const defaultStyles = (_theme: Theme): SettingsPageMobileStyles => ({
	root: {},
});

export const SettingsPageMobile = (props: SettingsPageMobileProps) => {
	const { filter } = props;
	const styles = useStyles('SettingsPageMobile', props, defaultStyles);
	const { value: items } = useFilter(
		`${filter}.page.mobile`,
		get(props, 'items', []) as SettingsPageItemProps[],
		props
	);

	return (
		<ScrollView>
			<SafeAreaView>
				<View style={styles.root}>
					{items.map((item, index) => (
						<React.Fragment key={item.name}>
							<SettingsPageItemMobile {...item} />
							{index < items.length - 1 && <Divider />}
						</React.Fragment>
					))}
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};

SettingsPageMobile.displayName = 'SettingsPageMobile';
SettingsPageMobile.defaultProps = {
	items: [],
};
export default SettingsPageMobile;
