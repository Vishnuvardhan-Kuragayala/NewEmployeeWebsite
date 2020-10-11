import { makeStyles } from "@material-ui/core/styles";

export const FormsTheme = makeStyles((theme) => ({
	appBar: {
		position: 'relative'
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	paper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column"
	},
	stepper: {
		padding: theme.spacing(3, 0, 5)
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1)
	},
	selectForm: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	},
	listItem: {
		padding: theme.spacing(1, 0)
	},
	title: {
		marginTop: theme.spacing(2)
	}
}));
