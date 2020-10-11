import { makeStyles } from "@material-ui/core/styles";

export const DetailsTheme = makeStyles((theme) => ({
	title: {
		flexGrow: 1
	},
	content: {
		flexGrow: 1,
		height: "100vh",
		overflow: "auto"
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	},
	paper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column"
	},
	fixedHeight: {
		height: 240
	},
	seeMore: {
		marginTop: theme.spacing(3)
	},
	loader: {
		width: "100%",
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3)
	},
	alert: {
		width: '100%',
		marginTop: theme.spacing(1)
	},
	submit: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1)
	}
}));
