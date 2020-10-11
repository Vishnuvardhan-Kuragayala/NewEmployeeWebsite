import { ButtonSize, ButtonVariant, ButtonColor } from "Enums/elements";

export interface IButton {
	color?: ButtonColor;
	cssClass?: string;
	disabled?: boolean;
	disableElevation?: boolean;
	disableFocusRipple?: boolean;
	fullWidth?: boolean;
	onClick: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
	text: string;
	size?: ButtonSize;
	variant?: ButtonVariant;
}
