import React from "react";
import Typography from "@material-ui/core/Typography";
import { ITitle } from "Interfaces/Title.interface";

const Title: React.FunctionComponent<ITitle> = (props: ITitle) => {
	const { title } = props;

	return (
		<Typography component="h2" variant="h6" color="primary" gutterBottom>
			{title}
		</Typography>
	);
};

export default Title;
