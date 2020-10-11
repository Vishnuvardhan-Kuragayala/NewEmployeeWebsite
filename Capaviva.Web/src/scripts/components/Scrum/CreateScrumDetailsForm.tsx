import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { FormsTheme } from "../../../styles/themes/forms.theme";
import Title from "Components/Title/Title";
import HTTPService from "Services/http-request.service";
import { HttpRequestMethodType } from "Enums/http-request-method-type.enum";
import { IHttpError, IHTTPResponse } from "Interfaces/Http.interface";
import UrlConstants from "Constants/url.constant";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Alert } from "Components/Elements";
import { AlertType } from "Enums/elements";
import Headings from "Resources/headings.resource";
import { Button } from "Components/Elements";
import { InputType, TextboxVariant } from "Enums/elements";
import {
	ButtonVariant,
	ButtonColor
} from "Enums/elements";
import { ICreateScrumDetailsModel } from "Interfaces/ScrumDetails.interface";

const useStyles = FormsTheme;

const CreateScrumDetailsForm: React.FunctionComponent = () => {
	const classes = useStyles();
	const [scrumTeamName, setScrumTeamName] = React.useState("");
	const [scrumMasterName, setScrumMasterName] = React.useState("");
	const [firstSpoc, setFirstSpoc] = React.useState("");
	const [secondSpoc, setSecondSpoc] = React.useState("");
	const [platformManagerName, setPlatformManagerName] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState("");

	const handleSaveScrumSuccess = (response: IHTTPResponse) => {
		setError("");
		setIsLoading(false);
		window.location.replace("/scrum");
	};

	const handleSaveScrumError = (err: IHttpError) => {
		setError(err.message);
		console.log(err.message);
		setIsLoading(false);
	};

	const saveScrumDetails = () => {
		setIsLoading(true);
		let scrumDataModel: ICreateScrumDetailsModel = {
			scrumTeamName: scrumTeamName,
			scrumMasterName: scrumMasterName,
			firstSpoc: firstSpoc,
			secondSpoc: secondSpoc,
			platformManagerName: platformManagerName
		};

		HTTPService.request(UrlConstants.SCRUM_DETAILS_URL,
			HttpRequestMethodType.POST,
			scrumDataModel, handleSaveScrumSuccess, handleSaveScrumError);
	};

	return (
		<React.Fragment>
			{!isLoading && <Paper className={classes.paper}>
				<Title title={"Create Scrum Details"} />
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="scrumTeamName"
							name="scrumTeamName"
							label="Scrum Team"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setScrumTeamName(e.target.value);}}
							value={scrumTeamName}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="scrumMasterName"
							name="scrumMasterName"
							label="Scrum Master Name"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setScrumMasterName(e.target.value);}}
							value={scrumMasterName}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="firstSpoc"
							name="firstSpoc"
							label="First Spoc"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setFirstSpoc(e.target.value);}}
							value={firstSpoc}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="secondSpoc"
							name="secondSpoc"
							label="Second Spoc"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setSecondSpoc(e.target.value);}}
							value={secondSpoc}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="platformManagerName"
							name="platformManagerName"
							label="Platform ManagerName"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setPlatformManagerName(e.target.value);}}
							value={platformManagerName}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
				</Grid>
				<div className={classes.buttons}>
					<Button
						variant={ButtonVariant.CONTAINED}
						color={ButtonColor.PRIMARY}
						onClick={() => saveScrumDetails()}
						cssClass={classes.button}
						text={"Save"}
					/>
				</div>
			</Paper>}
			{isLoading && <LinearProgress />}
			{error && <Alert message={error} title={Headings.errorAlertTitle} type={AlertType.ERROR} />}
		</React.Fragment>
	);
};

export default CreateScrumDetailsForm;
