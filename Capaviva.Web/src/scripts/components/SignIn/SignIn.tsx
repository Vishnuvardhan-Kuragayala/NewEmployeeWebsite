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
import { ISignInModel } from "Interfaces/SignIn.interface";
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

const SignIn: React.FunctionComponent = () => {
	const classes = useStyles();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState("");
	const [emailError,setEmailError] = React.useState("");
	const [passwordError,setPasswordError] = React.useState("");

	const handleLoginSuccess = (response: IHTTPResponse) => {
		if (response.data) {
			SessionService.setUserSession("true");
		}

		setError("");
		setIsLoading(false);
		window.location.replace("/");
	};

	const handleLoginError = (err: IHttpError) => {
		setError(err.message);
		console.log(err.message);
		setIsLoading(false);
	};
	const validateEmail = (email: any) => {
		
	
		var pattern = new RegExp(/^(("[\w-\s.]+")|([\w-.]+(?:[\w-.]+)*)|("[\w-\s.]+")([\w-.]+(?:[\w-.]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		 if (pattern.test(email))
		  {
			
			setEmailError("");
			return Promise.resolve();
		  }else{
			
			setEmailError("Please enter valid email.");
			return Promise.reject();

		}

	}

	const validatePassword = (password:any) =>
	{
		if(password==="")
		{	setPasswordError("Please enter password");
			return Promise.reject();
		}else{
			setPasswordError("");
			return Promise.resolve();
		
		}
	}
	const validateLogin = () => {
		setIsLoading(true);
		setError("");

		let signInModel: ISignInModel = {
			email: email,
			password: password
		};
		
		Promise.all([validatePassword(password),validateEmail(email)]).then(()=>{
			
				console.log(password, email);
			HTTPService.request(UrlConstants.SIGN_IN_URL,
				HttpRequestMethodType.POST, signInModel, handleLoginSuccess, handleLoginError);}
	
		,()=>{
			setIsLoading(false);
		});

		

	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant={TypographyVariant.H5}>
					{SignInUp.signIn}
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
					<div className="text-danger">{emailError}</div>
					<Textbox
						autoComplete={AutoCompleteConstants.CURRENT_PASSWORD}
						fullWidth
						id={SignInSelectors.PASSWORD}
						label={SignInUp.password}
						margin={TextboxMargin.NORMAL}
						name="password"
						onChange={(e) => {setPassword(e.target.value);}}
						required
						type={InputType.PASSWORD}
						value={password}
						variant={TextboxVariant.OUTLINED}
					/>
					<div className="text-danger">{passwordError}</div>
					<FormControlLabel
						control={<Checkbox value="remember" color={LinkColor.PRIMARY} />}
						label={SignInUp.rememberMe}
					/>
					{isLoading && <LinearProgress />}
					
					
					{error && <Alert message={error} title={Headings.errorAlertTitle} type={AlertType.ERROR} />}
					<Button
						fullWidth
						variant={ButtonVariant.CONTAINED}
						color={ButtonColor.PRIMARY}
						size={ButtonSize.MEDIUM}
						text={SignInUp.signIn}
						cssClass={classes.submit}
						onClick={() => {validateLogin();}}
					/>
					<Grid container>
						<Grid item xs>
							<Link href={LinkConstants.FORGOT_PASSWORD} text={SignInUp.forgotPassword} />
						</Grid>
						<Grid item>
							<Link href={LinkConstants.EMPTY} text={SignInUp.signUp} />
						</Grid>
					</Grid>
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

export default SignIn;
