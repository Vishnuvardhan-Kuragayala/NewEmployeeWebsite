import React from 'react';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from "Components/Elements";
import { FormsTheme } from "../../../styles/themes/forms.theme";
import { IEmployeeDetailsModel, ICreateAddressModel } from "Interfaces/EmployeeDetails.interface";
import {
	ButtonVariant,
	ButtonColor
} from "Enums/elements";
import Title from "Components/Title/Title";
import TitleConstants from "Constants/title.constant";

const useStyles = FormsTheme;

interface IEmployeeDetailsProps {
	handleBack: Function;
	saveEmployeeDetails: Function;
	employeeDetails: IEmployeeDetailsModel | undefined;
	employeeAddress: ICreateAddressModel[] | undefined;
}

const CreateEmployeeReview: React.FunctionComponent<IEmployeeDetailsProps> = (props: IEmployeeDetailsProps) => {
	const classes = useStyles();

	const capitalize = (data: string): string => {
		return data.charAt(0).toUpperCase() + data.slice(1);
	};

	const renderEmployeeDetails = (employeeDetail: any): JSX.Element => {
		let detailKeys = Object.keys(employeeDetail);

		let details = detailKeys.map((detailKey, index: number) => {
			let data: string = String(employeeDetail[detailKey]);
			const mappedData = TitleConstants[detailKey];

			return (<ListItem className={classes.listItem} key={index}>
				<ListItemText primary={mappedData} />
				<Typography variant="body2">{data}</Typography>
			</ListItem>);
		});

		return (<React.Fragment>
			<Title title={"Employee details"} />
			{details}
		</React.Fragment>);
	};

	const renderAddressDetails = (employeeAddress: any): JSX.Element => {
		let detailKeys = Object.keys(employeeAddress[0]);

		let details = employeeAddress.map((address: any, addressIndex: number) => {
			let addressView = detailKeys.map((detailKey: string, cellIndex: number) => {
				let data: string = String(address[detailKey]);

				return (<ListItem className={classes.listItem} key={cellIndex}>
					<ListItemText primary={detailKey} />
					<Typography variant="body2">{data}</Typography>
				</ListItem>);
			});

			return (<React.Fragment key={addressIndex}>
				<Title title={`${capitalize(address.addressType)} address details`} />
				{addressView}
			</React.Fragment>);
		});

		return (<React.Fragment>
			{details}
		</React.Fragment>);
	};

	return (
		<React.Fragment>
			{props.employeeDetails && renderEmployeeDetails(props.employeeDetails)}
			{props.employeeAddress && renderAddressDetails(props.employeeAddress)}
			<React.Fragment>
				<div className={classes.buttons}>
					{<Button onClick={() => props.handleBack()} cssClass={classes.button} text={"Back"} />}
					<Button
						variant={ButtonVariant.CONTAINED}
						color={ButtonColor.PRIMARY}
						onClick={() => props.saveEmployeeDetails()}
						cssClass={classes.button}
						text={"Save Employee"}
					/>
				</div>
			</React.Fragment>
		</React.Fragment>
	);
};

export default CreateEmployeeReview;
