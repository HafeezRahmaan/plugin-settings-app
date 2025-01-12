import { Caption, List, View } from '@bluebase/components';
import { Theme, useComponent, useIntl, useStyles } from '@bluebase/core';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

import { SettingsPageItemProps } from '../SettingsPageItem';

export interface SettingsPageItemMobileStyles {
	contentStyles: ViewStyle;
	descriptionStyles: TextStyle;
	root: ViewStyle;
	titleStyles: TextStyle;
	header: ViewStyle;
}

export interface SettingsPageItemMobileProps extends SettingsPageItemProps {
	// isMobile?: boolean;

	styles?: Partial<SettingsPageItemMobileStyles>;
}

const defaultStyles = (theme: Theme): SettingsPageItemMobileStyles => ({
	contentStyles: {},

	descriptionStyles: {
		color: theme.palette.text.hint,
		paddingHorizontal: theme.spacing.unit * 2,
	},

	root: {},

	header: {
		paddingVertical: theme.spacing.unit,
	},
	titleStyles: {
		paddingVertical: theme.spacing.unit,
	},
});

export const SettingsPageItemMobile = (props: SettingsPageItemMobileProps) => {
	const { description, descriptionStyle, title, titleStyle } = props;
	const ItemComponent = useComponent(props.component);
	const { __ } = useIntl();

	const styles = useStyles('SettingsPageItemDesktop', props, defaultStyles);

	const titleNode =
		typeof title === 'string' ? (
			<List.Subheader style={[titleStyle, styles.titleStyles]}>{__(title)}</List.Subheader>
		) : (
			title
		);

	const descNode =
		typeof description === 'string' ? (
			<Caption style={[styles.descriptionStyles, descriptionStyle]}>{__(description)}</Caption>
		) : (
			description
		);

	return (
		<View style={styles.root}>
			<View style={styles.header}>
				{titleNode}
				{descNode}
			</View>
			<View style={styles.contentStyles}>
				<ItemComponent />
			</View>
		</View>
	);
};

SettingsPageItemMobile.displayName = 'SettingsPageItemMobile';

export default SettingsPageItemMobile;
