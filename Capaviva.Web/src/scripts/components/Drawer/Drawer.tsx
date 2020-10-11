import React from "react";
import clsx from "clsx";
import { Drawer as DrawerElement } from "@material-ui/core";
import { IDrawer } from "Interfaces/Drawer.interface";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DrawerMenuList from "Components/Drawer/DrawerMenuList";

const Drawer: React.FunctionComponent<IDrawer> = (props: IDrawer) => {
	const { classList, handleDrawer, menuList, open } = props;

	return (<React.Fragment>
		<DrawerElement
			variant="permanent"
			classes={{
				paper: clsx(classList.drawerPaper, !open && classList.drawerPaperClose)
			}}
			open={open}>
			<div className={classList.toolbarIcon}>
				<IconButton onClick={handleDrawer}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
			<List>
				<DrawerMenuList menuList={menuList} />
			</List>
			<Divider />
		</DrawerElement>
	</React.Fragment>);
};

export default Drawer;
