import React from "react";
import CopyrightTitles from "Resources/copyright-title.resource";
import LinkConstants from "Constants/link.constant";
import { ICopyright } from "Interfaces/Copyright.interface";
import { Link } from "Components/Elements";
import { TypographyAlign, LinkColor, TypographyVariant } from "Enums/elements";
import Typography from "@material-ui/core/Typography";

const Copyright: React.FunctionComponent<ICopyright> = (props: ICopyright) => {
	const href = props.href ? props.href : LinkConstants.EMPTY;

	return (<React.Fragment>
		<Typography variant={TypographyVariant.BODY2} color={LinkColor.TEXT_SECONDARY} align={TypographyAlign.CENTER}>
			{CopyrightTitles.copyright}
			{props.shouldDisplayCopyrightLink && <Link color={LinkColor.INHERIT} href={href} text={props.text} />}
			{!props.shouldDisplayCopyrightLink && <span>{props.text}</span>}
			{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	</React.Fragment>);
};

export default Copyright;
