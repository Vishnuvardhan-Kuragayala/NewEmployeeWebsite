import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import { IEmployeeDetails } from "Interfaces/EmployeeDetails.interface";
import HTTPService from "Services/http-request.service";
import { HttpRequestMethodType } from "Enums/http-request-method-type.enum";
import { IHttpError, IHTTPResponse } from "Interfaces/Http.interface";
import { DetailsTheme } from "../../../styles/themes/details.theme";
import { Alert, Table } from "Components/Elements";
import Title from "Components/Title/Title";
import Details from "Resources/details.resource";
import UrlConstants from "Constants/url.constant";
import { AlertType, TableSize } from "Enums/elements";
import Headings from "Resources/headings.resource";
import { Button } from "Components/Elements";
import {
	ButtonSize,
	ButtonVariant,
	ButtonColor
} from "Enums/elements";

const useStyles = DetailsTheme;

const EmployeeDetails: React.FunctionComponent = (props) => {
	const [employeeDetails, setEmployeeDetails] = React.useState<IEmployeeDetails[]>();
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState("");
	const classList = useStyles();

	const loadEmployeeList = (response: IHTTPResponse) => {
		const details: IEmployeeDetails[] = response.data;

		setError("");
		setEmployeeDetails(details);
		setIsLoading(false);
	};

	const handleEmployeeListError = (err: IHttpError) => {
		setError(err.message);
		setIsLoading(false);
	};

	React.useEffect(() => {
		setIsLoading(true);
		HTTPService.request(UrlConstants.EMPLOYEE_DETAILS_URL,
			HttpRequestMethodType.GET, null, loadEmployeeList, handleEmployeeListError);
	}, [props]);

	const getTableHeaderData = (details: IEmployeeDetails[]) => {
		let data = Object.keys(details[0]);

		return data;
	};

	const getTableBodyData = (details: IEmployeeDetails[]) => {
		let bodyData: any = details;

		details.forEach((detail: IEmployeeDetails, index: number) => {
			if (detail.address && detail.address.length) {
				let address = detail.address[0].addressLine1 + detail.address[0].addressLine2 + detail.address[0].city;
				bodyData[index].address = address;
			}
		});

		return bodyData;
	};

	const redirectToCreateEmployee = () => {
		window.location.replace("/createEmployee");
	};

	return (<React.Fragment>
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Paper className={classList.paper}>
					<Title title={Details.employeeDetailsTitle} />
					{isLoading && <div className={classList.loader}>
						<LinearProgress />
					</div>}
					{!isLoading && <React.Fragment>
						{employeeDetails && <Table headerData={getTableHeaderData(employeeDetails)}
							bodyData={getTableBodyData(employeeDetails)}
							size={TableSize.SMALL} />}
						<div className={classList.seeMore} />
					</React.Fragment>}
					{error && <Alert message={error} title={Headings.errorAlertTitle} type={AlertType.ERROR} />}
				</Paper>
			</Grid>
		</Grid>
		<Grid item xs={12} sm={3}>
			<Button
				fullWidth
				variant={ButtonVariant.CONTAINED}
				color={ButtonColor.PRIMARY}
				size={ButtonSize.MEDIUM}
				text={"Create Employee"}
				cssClass={classList.submit}
				onClick={() => {redirectToCreateEmployee();}}
			/>
		</Grid>
	</React.Fragment>);
};

export default EmployeeDetails;
