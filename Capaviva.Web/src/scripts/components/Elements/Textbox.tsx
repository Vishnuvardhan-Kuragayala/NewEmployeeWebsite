import React from 'react';
import { ITextbox } from "Interfaces/elements";
import { InputType, TextboxColor, TextboxVariant } from "Enums/elements";
import TextField from '@material-ui/core/TextField';

export const Textbox: React.FunctionComponent<ITextbox> = (props: ITextbox) => {
	const autoComplete = props.autoComplete ? props.autoComplete : "";
	const classList = props.cssClass ? `${props.cssClass}` : "";
	const color = props.color ? props.color : TextboxColor.PRIMARY;
	const label = props.label ? props.label : "";
	const placeholder = props.placeholder ? props.placeholder : "";
	const type = props.type ? props.type : InputType.TEXT;
	const value = props.value ? props.value : "";
	const variant = props.variant ? props.variant : TextboxVariant.STANDARD;

	return (<React.Fragment>
		<TextField
			autoComplete={autoComplete}
			autoFocus={props.autoFocus}
			className={classList}
			color={color}
			disabled={props.disabled}
			error={props.error}
			fullWidth={props.fullWidth}
			id={props.id}
			label={label}
			margin={props.margin}
			multiline={props.multiline}
			name={props.name}
			onChange={props.onChange}
			placeholder={placeholder}
			required={props.required}
			size={props.size}
			type={type}
			value={value}
			variant={variant}
		/>
	</React.Fragment>);
};
