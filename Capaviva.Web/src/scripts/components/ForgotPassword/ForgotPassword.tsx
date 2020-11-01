import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Button,Textbox } from "Components/Elements";
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
import { makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AutoCompleteConstants from "Constants/autocomplete.constant";
import LinkConstants from "Constants/link.constant";
import SignInSelectors from "Constants/selectors/sign-in.selector";
import { IHttpError, IHTTPResponse } from "Interfaces/Http.interface";
import { AlertType } from "Enums/elements";
import Headings from "Resources/headings.resource";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Alert } from "Components/Elements";
import SessionService from '../../services/session.service';
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
	const [emailError,setEmailError] = React.useState("");
	

	const handleEmailSuccess = (response: IHTTPResponse) => {
		if (response.data) {
			SessionService.setUserSession("true");
		}

		setError("");
		setIsLoading(false);
		
		setIsLoading(false);
		window.location.replace("/resetpassword");

		
	};

	const handleEmailError = (err: IHttpError) => {
		setError(err.message);
		console.log(err.message);
		setIsLoading(false);
	};

	const validateEmail = (email: any) => {
		
	
		var pattern = new RegExp(/^(("[\w-\s.]+")|([\w-.]+(?:[\w-.]+)*)|("[\w-\s.]+")([\w-.]+(?:[\w-.]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		 if (pattern.test(email))
		  {
			setEmail(email);
			setEmailError("");
		  }else if(email === ""){
			
			setEmailError("Please enter email.");
			setEmail(email);
		}else{
			
			setEmailError("Please enter valid email.");
			setEmail(email);
		}
		

	}

	const checkEmail = () => {
		setIsLoading(true);

		/*let forgotPasswordModel: IForgotPasswordModel = {
			email: email
		};*/
		

		if(emailError == "" && (email!== ""))
		{
		
		setIsLoading(false);
	
		window.location.replace("/resetpassword");}
		else{
			setEmailError("Please enter email.");
			setIsLoading(false);
			
		}

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
						onChange={(e) => {validateEmail(e.target.value);}}
						required
						value={email}
						variant={TextboxVariant.OUTLINED}
					/>
			
					<div className="text-danger">{emailError}</div>

					{isLoading && <LinearProgress />}
					
					<Button
						fullWidth
						variant={ButtonVariant.CONTAINED}
						color={ButtonColor.PRIMARY}
						size={ButtonSize.MEDIUM}
						text={SignInUp.resetPassword}
						cssClass={classes.submit}
						onClick={() => {checkEmail();}}
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
