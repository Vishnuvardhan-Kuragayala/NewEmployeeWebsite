import React from 'react';
import { IIcon, IIconName } from "Interfaces/elements/Icon.interface";
import IconMapper from "Mappers/icon.mapper";

export const Icon: React.FunctionComponent<IIconName> = (props: IIconName) => {
	const { iconName, color } = props;
	const getMappedIcon = (iconName: string): IIcon => {
		let icon: IIcon = IconMapper[iconName];

		return icon;
	};

	const renderIcon = (iconName: string, iconColor: string): JSX.Element => {
		const icon: IIcon = getMappedIcon(iconName);
		const WrappedComponent = icon.iconComponent;

		return <WrappedComponent style={{ color: iconColor }}/>;
	};

	return (<React.Fragment>
		{renderIcon(iconName, color)}
	</React.Fragment>);
};
