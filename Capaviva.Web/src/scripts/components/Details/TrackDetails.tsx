import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
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
import { ITrackDetails } from "Interfaces/TrackDetails.interface";
import { Button } from "Components/Elements";
import {
	ButtonSize,
	ButtonVariant,
	ButtonColor
} from "Enums/elements";

const useStyles = DetailsTheme;

const TrackDetails: React.FunctionComponent = (props) => {
	const [trackDetails, setTrackDetails] = React.useState<ITrackDetails[]>();
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState("");
	const classList = useStyles();

	const loadTrackList = (response: IHTTPResponse) => {
		const details: ITrackDetails[] = response.data;

		setError("");
		setTrackDetails(details);
		setIsLoading(false);
	};

	const handleTrackListError = (err: IHttpError) => {
		setError(err.message);
		setIsLoading(false);
	};

	React.useEffect(() => {
		setIsLoading(true);
		HTTPService.request(UrlConstants.TRACK_DETAILS_URL,
			HttpRequestMethodType.GET, null, loadTrackList, handleTrackListError);
	}, [props]);

	const getTableHeaderData = (details: ITrackDetails[]) => {
		let data = Object.keys(details[0]);

		return data;
	};

	const redirectToCreateTrack = () => {
		window.location.replace("/createTrack");
	};

	return (<React.Fragment>
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Paper className={classList.paper}>
					<Title title={Details.trackDetailsTitle} />
					{isLoading && <div className={classList.loader}>
						<LinearProgress />
					</div>}
					{!isLoading && <React.Fragment>
						{trackDetails && <Table headerData={getTableHeaderData(trackDetails)}
							bodyData={trackDetails}
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
				onClick={() => {redirectToCreateTrack();}}
			/>
		</Grid>
	</React.Fragment>);
};

export default TrackDetails;

