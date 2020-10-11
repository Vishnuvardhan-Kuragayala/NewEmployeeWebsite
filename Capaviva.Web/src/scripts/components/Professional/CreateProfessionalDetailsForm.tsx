import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { FormsTheme } from "../../../styles/themes/forms.theme";
import { InputType, TextboxVariant } from "Enums/elements";
import { ICreateProfessionalDetails } from 'Interfaces/ProfessionalDetails.interface';
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
import {
	ButtonVariant,
	ButtonColor
} from "Enums/elements";

const useStyles = FormsTheme;

const CreateProfessionalDetailsForm: React.FunctionComponent = () => {
	const classes = useStyles();
	const [employeeId, setEmployeeId] = React.useState("");
	const [supervisorId, setSupervisorId] = React.useState("");
	const [peerId, setPeerId] = React.useState("");
	const [projectTrackCode, setProjectTrackCode] = React.useState("");
	const [isBillable, setIsBillable] = React.useState('');
	const [designation, setDesignation] = React.useState('');
	const [designationEffectiveDate, setDesignationEffectiveDate] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState("");

	const handleChange = (handler: any, event: any) => {
		handler(event.target.value);
	};

	const handleSaveProfessionalSuccess = (response: IHTTPResponse) => {
		setError("");
		setIsLoading(false);
		window.location.replace("/professional");
	};

	const handleSaveProfessionalError = (err: IHttpError) => {
		setError(err.message);
		console.log(err.message);
		setIsLoading(false);
	};

	const saveProfessionalDetails = () => {
		setIsLoading(true);
		let professionalDataModel: ICreateProfessionalDetails = {
			employeeId: +employeeId,
			supervisorId: +supervisorId,
			peerId: +peerId,
			projectTrackCode: +projectTrackCode,
			isBillable: isBillable,
			designation: designation,
			designationEffectiveDate: designationEffectiveDate
		};

		HTTPService.request(UrlConstants.CREATE_PROFESSIONAL_DETAILS_URL,
			HttpRequestMethodType.POST,
			professionalDataModel, handleSaveProfessionalSuccess, handleSaveProfessionalError);
	};

	return (
		<React.Fragment>
			{!isLoading && <Paper className={classes.paper}>
				<Title title={"Create Professional Details"} />
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="employeeId"
							name="employeeId"
							label="Employee ID"
							fullWidth
							type={InputType.NUMBER}
							onChange={(e) => {setEmployeeId(e.target.value);}}
							value={employeeId}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="supervisorId"
							name="supervisorId"
							label="Supervisor ID"
							fullWidth
							type={InputType.NUMBER}
							onChange={(e) => { setSupervisorId(e.target.value); }}
							value={supervisorId}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="peerId"
							name="peerId"
							label="Reviewer Id"
							fullWidth
							type={InputType.NUMBER}
							onChange={(e) => { setPeerId(e.target.value); }}
							value={peerId}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="isBillable"
							name="isBillable"
							label="Is Billable"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => { setIsBillable(e.target.value); }}
							value={isBillable}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<FormControl className={classes.selectForm}>
							<InputLabel id="demo-simple-select-label">Track Code</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={projectTrackCode}
								onChange={(e) => handleChange(setProjectTrackCode, e)}
								label="projectTrackCode"
							>
								<MenuItem value={"1"}>1</MenuItem>
								<MenuItem value={"2"}>2</MenuItem>
								<MenuItem value={"3"}>3</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6}>
						<FormControl className={classes.selectForm}>
							<InputLabel id="demo-simple-select-label">Designation</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={designation}
								onChange={(e) => handleChange(setDesignation, e)}
								label="designation"
							>
								<MenuItem value={"softwarEengineer"}>Software Engineer</MenuItem>
								<MenuItem value={"seniorSoftwareEngineer"}>Senior Software Engineer</MenuItem>
								<MenuItem value={"associateConsultant"}>Associate Consultant</MenuItem>
								<MenuItem value={"consultant"}>Consultant</MenuItem>
								<MenuItem value={"seniorConsultant"}>Senior Consultant</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="designationEffectiveDate"
							name="designationEffectiveDate"
							label="Designation EffectiveDate"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => { setDesignationEffectiveDate(e.target.value); }}
							value={designationEffectiveDate}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
				</Grid>
				<div className={classes.buttons}>
					<Button
						variant={ButtonVariant.CONTAINED}
						color={ButtonColor.PRIMARY}
						onClick={() => saveProfessionalDetails()}
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

export default CreateProfessionalDetailsForm;
