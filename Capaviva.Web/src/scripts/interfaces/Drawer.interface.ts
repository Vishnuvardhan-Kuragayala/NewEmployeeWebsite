import React from "react";

export interface IDrawer {
	classList: any;
	handleDrawer: (event: any) => void;
	menuList: IDrawerMenuItem[];
	open: boolean;
}

export interface IDrawerMenuItem {
	icon: string;
	isSelected: boolean;
	sortOrder: number;
	title: string;
	path: string,
	sidebarName: string,
	component: React.Component,
}

export interface IDrawerMenuList {
	menuList: IDrawerMenuItem[];
}
