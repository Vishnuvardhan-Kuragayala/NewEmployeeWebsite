import Routes from "Components/Routes/Routes";

import { IDrawerMenuItem } from "Interfaces/Drawer.interface";

const DrawerListService = {
	getDrawerMenuData(): IDrawerMenuItem[] {
		let menuList: IDrawerMenuItem[] = Routes;

		menuList.sort((current: IDrawerMenuItem, next: IDrawerMenuItem) => {
			return current.sortOrder - next.sortOrder;
		});

		return menuList;
	}
};

export default DrawerListService;
