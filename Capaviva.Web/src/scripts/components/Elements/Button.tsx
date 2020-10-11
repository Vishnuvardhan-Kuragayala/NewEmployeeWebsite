import React from 'react';
import { IButton } from "Interfaces/elements";
import { ButtonSize, ButtonVariant, ButtonColor } from "Enums/elements";
import { Button as ButtonElement } from '@material-ui/core';

export const Button: React.FunctionComponent<IButton> = (props: IButton) => {
	const classList = props.cssClass ? `${props.cssClass}` : "";
	const color = props.color ? props.color : ButtonColor.DEFAULT;
	const size = props.size ? props.size : ButtonSize.MEDIUM;
	const variant = props.variant ? props.variant : ButtonVariant.TEXT;

	return (<React.Fragment>
		<ButtonElement
			className={classList}
			color={color}
			disabled={props.disabled}
			disableElevation={props.disableElevation}
			disableFocusRipple={props.disableFocusRipple}
			fullWidth={props.fullWidth}
			onClick={props.onClick}
			size={size}
			variant={variant}
		>
			{props.text}
		</ButtonElement>
	</React.Fragment>);
};
