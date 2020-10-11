import React from "react";
import { IAlert } from "Interfaces/elements";
import { Alert as AlertElement, AlertTitle } from "@material-ui/lab";
import { DetailsTheme } from "../../../styles/themes/details.theme";

const useStyles = DetailsTheme;

export const Alert: React.FunctionComponent<IAlert> = (props: IAlert) => {
	const classList = useStyles();
	const { message, title, type } = props;

	return (<div className={classList.alert}>
		<AlertElement severity={type}>
			<AlertTitle>{title}</AlertTitle>
			{message}
		</AlertElement>
	</div>);
};
