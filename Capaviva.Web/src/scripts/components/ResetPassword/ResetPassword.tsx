import React from "react";
import { Button, Textbox } from "Components/Elements";
import Copyright from "Components/Copyright/Copyright";
import CopyrightTitles from "Resources/copyright-title.resource";
import {
	ButtonSize,
	ButtonVariant,
	ButtonColor,
	InputType,
	TextboxVariant,
	TextboxMargin,
	TypographyVariant
} from "Enums/elements";
import SignInUp from "Resources/sign-in-up.resource";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LinkConstants from "Constants/link.constant";
import SignInSelectors from "Constants/selectors/sign-in.selector";
import { AlertType } from "Enums/elements";
import Headings from "Resources/headings.resource";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Alert } from "Components/Elements";
import Container from "@material-ui/core/Container";

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

const ResetPassword: React.FunctionComponent = () => {
	const classes = useStyles();
	const [email] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState("");

	const resetPassword = () => {
		setIsLoading(true);
		setError("");
		setIsLoading(false);
		console.log("email and password", email, confirmPassword, password);
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline/>
			<div className={classes.paper}>
				<Typography component="h1" variant={TypographyVariant.H5}>
					{SignInUp.resetPassword}
				</Typography>
				<form className={classes.form} noValidate>
					<Textbox fullWidth
						id={SignInSelectors.NEWPASSWORD}
						label={SignInUp.newPassword}
						margin={TextboxMargin.NORMAL}
						name="newPassword"
						onChange={(e) => {setPassword(e.target.value);}}
						required
						value={password}
						type={InputType.PASSWORD}
						variant={TextboxVariant.OUTLINED}
					/>
					<Textbox
						fullWidth
						id={SignInSelectors.CONFIRMPASSWORD}
						label={SignInUp.confirmPassword}
						margin={TextboxMargin.NORMAL}
						name="confirmPassword"
						onChange={(e) => {setConfirmPassword(e.target.value);}}
						required
						value={confirmPassword}
						type={InputType.PASSWORD}
						variant={TextboxVariant.OUTLINED}/>
					{isLoading && <LinearProgress />}
					{error && <Alert message={error} title={Headings.errorAlertTitle} type={AlertType.ERROR} />}
					<Button
						fullWidth
						variant={ButtonVariant.CONTAINED}
						color={ButtonColor.PRIMARY}
						size={ButtonSize.MEDIUM}
						text={SignInUp.resetPassword}
						cssClass={classes.submit}
						onClick={() => {resetPassword();}}
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

export default ResetPassword;
