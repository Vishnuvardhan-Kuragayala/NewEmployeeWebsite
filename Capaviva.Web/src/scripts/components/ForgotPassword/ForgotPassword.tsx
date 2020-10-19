import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Button, Textbox } from "Components/Elements";
import Copyright from "Components/Copyright/Copyright";
import CopyrightTitles from "Resources/copyright-title.resource";
import {
	ButtonSize,
	ButtonVariant,
	ButtonColor,
	TextboxVariant,
	TextboxMargin,
	TypographyVariant
} from "Enums/elements";
import SignInUp from "Resources/sign-in-up.resource";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AutoCompleteConstants from "Constants/autocomplete.constant";
import LinkConstants from "Constants/link.constant";
import SignInSelectors from "Constants/selectors/sign-in.selector";
import { AlertType } from "Enums/elements";
import Headings from "Resources/headings.resource";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Alert } from "Components/Elements";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));


const ForgotPassword: React.FunctionComponent = () => {
	const classes = useStyles();
	const [email, setEmail] = React.useState("");
	const [isLoading] = React.useState(false);
	const [error] = React.useState("");

	const validateEmail = () => {
		window.location.replace("/resetpassword");
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant={TypographyVariant.H5}>
					{SignInUp.forgotPassword}
				</Typography>
				<form className={classes.form} noValidate>
					<Textbox
						autoFocus
						autoComplete={AutoCompleteConstants.EMAIL}
						fullWidth
						id={SignInSelectors.EMAIL}
						label={SignInUp.emailAddress}
						margin={TextboxMargin.NORMAL}
						name="email"
						onChange={(e) => { setEmail(e.target.value); }}
						required
						value={email}
						variant={TextboxVariant.OUTLINED}
					/>
					{isLoading && <LinearProgress />}
					{error && <Alert message={error} title={Headings.errorAlertTitle} type={AlertType.ERROR} />}
					<Button
						fullWidth
						variant={ButtonVariant.CONTAINED}
						color={ButtonColor.PRIMARY}
						size={ButtonSize.MEDIUM}
						text={SignInUp.resetPassword}
						cssClass={classes.submit}
						onClick={() => { validateEmail(); }}
					/>
				</form>
			</div>
			<Box mt={8}>
				<Copyright
					href={LinkConstants.EMPTY}
					shouldDisplayCopyrightLink
					text={CopyrightTitles.brandName} />
			</Box>
		</Container>
	);
};

export default ForgotPassword;
