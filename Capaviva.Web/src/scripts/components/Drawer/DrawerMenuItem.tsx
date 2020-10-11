import React from "react";
import { IDrawerMenuItem } from "Interfaces/Drawer.interface";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Icon } from "Components/Elements";

const DrawerMenuItem: React.FunctionComponent<IDrawerMenuItem> = (props: IDrawerMenuItem) => {
	const { icon, title, isSelected } = props;

	const getIconColor = (isSelected: boolean): string => {
		return isSelected ? "white" : "rgba(0, 0, 0, 0.54)";
	};

	return (<React.Fragment>
		<ListItem button selected={isSelected}>
			<ListItemIcon>
				<Icon iconName={icon} color={getIconColor(isSelected)} />
			</ListItemIcon>
			<ListItemText primary={title} />
		</ListItem>
	</React.Fragment>);
};

export default DrawerMenuItem;
