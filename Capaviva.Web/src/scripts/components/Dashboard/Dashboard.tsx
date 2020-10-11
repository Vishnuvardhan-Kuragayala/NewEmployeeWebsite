import React from "react";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import DrawerListService from "Services/drawer-list.service";
import AppBar from "Components/AppBar/AppBar";
import Copyright from "Components/Copyright/Copyright";
import CopyrightTitles from "Resources/copyright-title.resource";
import Drawer from "Components/Drawer/Drawer";
import LinkConstants from "Constants/link.constant";
import { IDrawerMenuItem } from "Interfaces/Drawer.interface";
import { DashboardTheme } from "../../../styles/themes/dashboard.theme";

const useStyles = DashboardTheme;

const Dashboard = (props: any) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	let menuList: IDrawerMenuItem[] = DrawerListService.getDrawerMenuData();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				classList={classes}
				handleDrawer={handleDrawerOpen}
				open={open}
				title={CopyrightTitles.brandName}
			/>
			<Drawer
				classList={classes}
				handleDrawer={handleDrawerClose}
				menuList={menuList}
				open={open}
			/>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="lg" className={classes.container}>
					{props.children}
				</Container>
				<Box pt={4}>
					<Copyright
						href={LinkConstants.EMPTY}
						shouldDisplayCopyrightLink
						text={CopyrightTitles.brandName} />
				</Box>
			</main>
		</div>
	);
};

export default Dashboard;
