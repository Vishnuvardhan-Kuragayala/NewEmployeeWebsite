import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import { IProfessionalDetails } from "Interfaces/ProfessionalDetails.interface";
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

const ProfessionalDetails: React.FunctionComponent = (props) => {
	const [professionalDetails, setProfessionalDetails] = React.useState<IProfessionalDetails[]>();
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState("");
	const classList = useStyles();

	const loadProfessionalList = (response: IHTTPResponse) => {
		const details: IProfessionalDetails[] = response.data;

		setError("");
		setProfessionalDetails(details);
		setIsLoading(false);
	};

	const handleProfessionalListError = (err: IHttpError) => {
		setError(err.message);
		setIsLoading(false);
	};

	React.useEffect(() => {
		setIsLoading(true);
		HTTPService.request(UrlConstants.PROFESSIONAL_DETAILS_URL,
			HttpRequestMethodType.GET, null, loadProfessionalList, handleProfessionalListError);
	}, [props]);

	const getTableHeaderData = (details: IProfessionalDetails[]) => {
		let data = Object.keys(details[0]);

		return data;
	};

	const redirectToCreateProfessional = () => {
		window.location.replace("/createProfessional");
	};

	return (<React.Fragment>
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Paper className={classList.paper}>
					<Title title={Details.professionalDetailsTitle} />
					{isLoading && <div className={classList.loader}>
						<LinearProgress />
					</div>}
					{!isLoading && <React.Fragment>
						{professionalDetails && <Table headerData={getTableHeaderData(professionalDetails)}
							bodyData={professionalDetails}
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
				text={"Create New"}
				cssClass={classList.submit}
				onClick={() => {redirectToCreateProfessional();}}
			/>
		</Grid>
	</React.Fragment>);
};

export default ProfessionalDetails;
