import React from "react";
import { IDrawerMenuItem, IDrawerMenuList } from "Interfaces/Drawer.interface";
import DrawerMenuItem from "Components/Drawer/DrawerMenuItem";
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

type IDrawerMenuListProps = RouteComponentProps & IDrawerMenuList;

const DrawerMenuList: React.FunctionComponent<IDrawerMenuListProps> = (props: IDrawerMenuListProps) => {
	const { menuList } = props;

	const activeRoute = (routeName: any) => {
		return props.location.pathname === routeName;
	};

	const renderDrawerMenuList = (drawerMenuList: IDrawerMenuItem[]): JSX.Element[] => {
		let drawerMenu = drawerMenuList.map((drawerMenu: IDrawerMenuItem, index) => {
			return (<NavLink to={drawerMenu.path}
				style={{ textDecoration: 'none' }}
				key={index} className="nav-link-item">
				<DrawerMenuItem
					path={drawerMenu.path}
					sidebarName={drawerMenu.sidebarName}
					component={drawerMenu.component}
					icon={drawerMenu.icon}
					isSelected={activeRoute(drawerMenu.path)}
					sortOrder={drawerMenu.sortOrder}
					title={drawerMenu.title} />
			</NavLink>);
		});

		return drawerMenu;
	};

	return (<React.Fragment>
		{(menuList && menuList.length) && renderDrawerMenuList(menuList)}
	</React.Fragment>);
};

export default withRouter(DrawerMenuList);
