import React from 'react';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import EmployeeAddress from './EmployeeAddress';
import EmployeeDetailsForm from './EmployeeDetailsForm';
import CreateEmployeeReview from './CreateEmployeeReview';
import { FormsTheme } from "../../../styles/themes/forms.theme";
import Title from "Components/Title/Title";
import { ICreateEmployeeModel, IEmployeeDetailsModel, ICreateAddressModel } from "Interfaces/EmployeeDetails.interface";
import HTTPService from "Services/http-request.service";
import { HttpRequestMethodType } from "Enums/http-request-method-type.enum";
import { IHttpError, IHTTPResponse } from "Interfaces/Http.interface";
import UrlConstants from "Constants/url.constant";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Alert } from "Components/Elements";
import { AlertType } from "Enums/elements";
import Headings from "Resources/headings.resource";

const useStyles = FormsTheme;

const steps = ['Employee details', 'Address details', 'Review employee'];

const CreateEmployee: React.FunctionComponent = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [employeeDetails, setEmployeeDetails] = React.useState<IEmployeeDetailsModel>();
	const [employeeAddress, setEmployeeAddress] = React.useState<ICreateAddressModel[]>();
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState("");

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	const handleSaveEmployeeSuccess = (response: IHTTPResponse) => {
		if (response.data) {
			setError("");
			setIsLoading(false);
			window.location.replace("/");
		}
	};

	const handleSaveEmployeeError = (err: IHttpError) => {
		setError(err.message);
		console.log(err.message);
		setIsLoading(false);
	};

	const setEmployeeDetailsModel = (model: IEmployeeDetailsModel) => {
		handleNext();
		setEmployeeDetails(model);
	};

	const setEmployeeAddressModel = (model: ICreateAddressModel[]) => {
		handleNext();
		setEmployeeAddress(model);
	};

	const saveEmployeeDetails = () => {
		setIsLoading(true);
		if (employeeDetails && employeeAddress) {
			let employeeModel: ICreateEmployeeModel = {
				...employeeDetails,
				address: employeeAddress
			};

			HTTPService.request(UrlConstants.EMPLOYEE_DETAILS_URL,
				HttpRequestMethodType.POST, employeeModel, handleSaveEmployeeSuccess, handleSaveEmployeeError);
		}
	};

	const getStepContent = (step: number) => {
		switch (step) {
		case 0:
			return (<EmployeeDetailsForm handleBack={handleBack}
				setEmployeeDetailsModel={setEmployeeDetailsModel} />);
		case 1:
			return (<EmployeeAddress handleBack={handleBack}
				setEmployeeAddressModel={setEmployeeAddressModel} />);
		case 2:
			return (<CreateEmployeeReview handleBack={handleBack}
				saveEmployeeDetails={saveEmployeeDetails}
				employeeDetails={employeeDetails}
				employeeAddress={employeeAddress} />);
		default:
			throw new Error('Unknown step');
		}
	};

	return (
		<React.Fragment>
			{!isLoading && <Paper className={classes.paper}>
				<Title title={"Create Employee"} />
				<Stepper activeStep={activeStep} className={classes.stepper}>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<React.Fragment>
					{getStepContent(activeStep)}
				</React.Fragment>
			</Paper>}
			{isLoading && <LinearProgress />}
			{error && <Alert message={error} title={Headings.errorAlertTitle} type={AlertType.ERROR} />}
		</React.Fragment>
	);
};

export default CreateEmployee;
