import React from 'react';
import { ILink } from "Interfaces/elements";
import { LinkColor, LinkUnderline } from "Enums/elements";
import { Link as LinkElement } from '@material-ui/core';

export const Link: React.FunctionComponent<ILink> = (props: ILink) => {
	const classList = props.cssClass ? `${props.cssClass}` : "";
	const color = props.color ? props.color : LinkColor.PRIMARY;
	const underline = props.underline ? props.underline : LinkUnderline.HOVER;

	return (<React.Fragment>
		<LinkElement
			className={classList}
			color={color}
			href={props.href}
			underline={underline}
			variant="inherit"
		>
			{props.text}
		</LinkElement>
	</React.Fragment>);
};
