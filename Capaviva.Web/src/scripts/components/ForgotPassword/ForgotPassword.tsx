import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Button, Link, Textbox } from "Components/Elements";
import Copyright from "Components/Copyright/Copyright";
import CopyrightTitles from "Resources/copyright-title.resource";
import {
	ButtonSize,
	ButtonVariant,
	ButtonColor,
	InputType,
	LinkColor,
	TextboxVariant,
	TextboxMargin,
	TypographyVariant
} from "Enums/elements";
import SignInUp from "Resources/sign-in-up.resource";
import ResetPassword from "Components/ResetPassword/ResetPassword";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AutoCompleteConstants from "Constants/autocomplete.constant";
import LinkConstants from "Constants/link.constant";
import SignInSelectors from "Constants/selectors/sign-in.selector";
import HTTPService from "Services/http-request.service";
import { HttpRequestMethodType } from "Enums/http-request-method-type.enum";
import { IHttpError, IHTTPResponse } from "Interfaces/Http.interface";
import UrlConstants from "Constants/url.constant";
import { AlertType } from "Enums/elements";
import Headings from "Resources/headings.resource";
import { IForgotPasswordModel } from "Interfaces/ForgotPassword.interface";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Alert } from "Components/Elements";
import SessionService from "Services/session.service";

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
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState("");
	const [emailSuccess, setEmailSuccess] = React.useState(false);

	const handleEmailSuccess = (response: IHTTPResponse) => {
		if (response.data) {
			SessionService.setUserSession("true");
		}

		setError("");
		setIsLoading(false);
		setEmailSuccess(true);
		setIsLoading(false);
		window.location.replace("/resetpassword");

		
	};

	const handleEmailError = (err: IHttpError) => {
		setError(err.message);
		console.log(err.message);
		setIsLoading(false);
	};

	const validateEmail = () => {
		setIsLoading(true);

		let forgotPasswordModel: IForgotPasswordModel = {
			email: email
		};
		
		setEmailSuccess(true);
		setIsLoading(false);
		window.location.replace("/resetpassword");

		//HTTPService.request(UrlConstants.CHECK_EMAIL_URL,
			//HttpRequestMethodType.POST, forgotPasswordModel, handleEmailSuccess, handleEmailError);
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
						onChange={(e) => {setEmail(e.target.value);}}
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
						onClick={() => {validateEmail();}}
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
