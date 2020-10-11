import React from "react";
import clsx from "clsx";
import { AppBar as AppBarElement } from "@material-ui/core";
import { IAppBar } from "Interfaces/AppBar.interface";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import UserAccountMenu from "Components/UserAccountMenu/UserAccountMenu";

const AppBar: React.FunctionComponent<IAppBar> = (props: IAppBar) => {
	const { classList, handleDrawer, open, title } = props;

	return (<React.Fragment>
		<AppBarElement position="absolute" className={clsx(classList.appBar, open && classList.appBarShift)}>
			<Toolbar className={classList.toolbar}>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawer}
					className={clsx(classList.menuButton, open && classList.menuButtonHidden)}>
					<MenuIcon />
				</IconButton>
				<Typography component="h1" variant="h6" color="inherit" noWrap className={classList.title}>
					{title}
				</Typography>
				<IconButton color="inherit">
					<Badge badgeContent={4} color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<UserAccountMenu />
			</Toolbar>
		</AppBarElement>
	</React.Fragment>);
};

export default AppBar;
