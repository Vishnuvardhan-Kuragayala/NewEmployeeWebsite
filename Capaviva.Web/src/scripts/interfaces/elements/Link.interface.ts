import { LinkColor, LinkUnderline } from "Enums/elements";

export interface ILink {
	color?: LinkColor;
	cssClass?: string;
	href: string;
	text: string;
	underline?: LinkUnderline; 
}