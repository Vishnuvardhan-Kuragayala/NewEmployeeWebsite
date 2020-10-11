import { TextboxMargin, InputType, TextboxColor, TextboxSize, TextboxVariant } from "Enums/elements";

export interface ITextbox {
	autoComplete?: string;
	autoFocus?: boolean;
	color?: TextboxColor;
	cssClass?: string;
	disabled?: boolean;
	error?: boolean;
	fullWidth?: boolean;
	id: string;
	label?: string;
	margin?: TextboxMargin;
	multiline?: boolean;
	name: string;
	onChange: React.EventHandler<React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>>;
	placeholder?: string;
	required?: boolean;
	size?: TextboxSize;
	type?: InputType;
	value?: string;
	variant: TextboxVariant;
}
