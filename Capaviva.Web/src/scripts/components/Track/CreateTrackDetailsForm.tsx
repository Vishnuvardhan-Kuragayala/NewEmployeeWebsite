import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button, Textbox } from "Components/Elements";
import { FormsTheme } from "../../../styles/themes/forms.theme";
import { InputType, TextboxVariant } from "Enums/elements";
import {
	ButtonVariant,
	ButtonColor
} from "Enums/elements";
import Title from "Components/Title/Title";
import HTTPService from "Services/http-request.service";
import { HttpRequestMethodType } from "Enums/http-request-method-type.enum";
import { IHttpError, IHTTPResponse } from "Interfaces/Http.interface";
import UrlConstants from "Constants/url.constant";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Alert } from "Components/Elements";
import { AlertType } from "Enums/elements";
import Headings from "Resources/headings.resource";
import { ITrackDetails } from "Interfaces/TrackDetails.interface";

const useStyles = FormsTheme;

const CreateTrackDetailsForm: React.FunctionComponent = () => {
	const classList = useStyles();
	const [projectTrackCode, setProjectTrackCode] = React.useState('');
	const [trackName, setTrackName] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState("");

	const handleSaveTrackSuccess = (response: IHTTPResponse) => {
		setError("");
		setIsLoading(false);
		window.location.replace("/track");
	};

	const handleSaveTrackError = (err: IHttpError) => {
		setError(err.message);
		console.log(err.message);
		setIsLoading(false);
	};

	const saveTrackDetails = () => {
		setIsLoading(true);
		let trackDataModel: ITrackDetails = {
			projectTrackCode: +projectTrackCode,
			trackName: trackName
		};

		HTTPService.request(UrlConstants.CREATE_TRACK_DETAILS_URL,
			HttpRequestMethodType.POST,
			trackDataModel, handleSaveTrackSuccess, handleSaveTrackError);
	};

	return (
		<React.Fragment>
			{!isLoading && <Paper className={classList.paper}>
				<Title title={"Create Track Details"} />
				<Grid container spacing={3}>
					<Grid item xs={12} sm={12}>
						<Textbox
							required
							id="projectTrackCode"
							name="projectTrackCode"
							label="Track Code"
							fullWidth
							type={InputType.NUMBER}
							onChange={(e) => { setProjectTrackCode(e.target.value); }}
							value={projectTrackCode}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={12}>
						<Textbox
							required
							id="trackName"
							name="trackName"
							label="Track Name"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => { setTrackName(e.target.value); }}
							value={trackName}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
				</Grid>
				<div className={classList.buttons}>
					<Button
						variant={ButtonVariant.CONTAINED}
						color={ButtonColor.PRIMARY}
						onClick={() => saveTrackDetails()}
						cssClass={classList.button}
						text={"Save"}
					/>
				</div>
			</Paper>}
			{isLoading && <LinearProgress />}
			{error && <Alert message={error} title={Headings.errorAlertTitle} type={AlertType.ERROR} />}
		</React.Fragment>
	);
};

export default CreateTrackDetailsForm;
