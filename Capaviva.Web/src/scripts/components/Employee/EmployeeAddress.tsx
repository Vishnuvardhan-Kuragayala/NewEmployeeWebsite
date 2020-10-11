import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Button, Textbox } from "Components/Elements";
import {
	ButtonSize,
	ButtonVariant,
	ButtonColor,
	InputType,
	TextboxVariant
} from "Enums/elements";
import { ICreateAddressModel } from "Interfaces/EmployeeDetails.interface";
import { FormsTheme } from "../../../styles/themes/forms.theme";

interface IMockProps {
	handleBack: Function;
	setEmployeeAddressModel: Function;
}

const useStyles = FormsTheme;

const EmployeeAddress: React.FunctionComponent<IMockProps> = (props: IMockProps) => {
	const classes = useStyles();

	const [addressTypeOne, setAddressTypeOne] = React.useState("");
	const [addressLine1One, setAddressLine1One] = React.useState("");
	const [addressLine2One, setAddressLine2One] = React.useState("");
	const [addressLine3One, setAddressLine3One] = React.useState("");
	const [cityOne, setCityOne] = React.useState("");
	const [stateOne, setStateOne] = React.useState("");
	const [postCodeOne, setPostCodeOne] = React.useState("");
	const [countryOne, setCountryOne] = React.useState("");

	const [addressTypeTwo, setAddressTypeTwo] = React.useState("");
	const [addressLine1Two, setAddressLine1Two] = React.useState("");
	const [addressLine2Two, setAddressLine2Two] = React.useState("");
	const [addressLine3Two, setAddressLine3Two] = React.useState("");
	const [cityTwo, setCityTwo] = React.useState("");
	const [stateTwo, setStateTwo] = React.useState("");
	const [postCodeTwo, setPostCodeTwo] = React.useState("");
	const [countryTwo, setCountryTwo] = React.useState("");

	const [isSecondAddressVisible, setIsSecondAddressVisible] = React.useState(false);

	const getAddAddressButtonText = (): string => {
		return isSecondAddressVisible ? "Hide Address" : "Add Address";
	};

	const handleShowHideNewAddress = () => {
		setIsSecondAddressVisible(!isSecondAddressVisible);
	};

	const getAddressModel = (): ICreateAddressModel[] => {
		let addressModel: ICreateAddressModel[] = [];

		let firstAddress: ICreateAddressModel = {
			addressType: addressTypeOne,
			addressLine1: addressLine1One,
			addressLine2: addressLine2One,
			addressLine3: addressLine3One,
			city: cityOne,
			state: stateOne,
			postCode: postCodeOne,
			country: countryOne
		};

		let secondAddress: ICreateAddressModel = {
			addressType: addressTypeTwo,
			addressLine1: addressLine1Two,
			addressLine2: addressLine2Two,
			addressLine3: addressLine3Two,
			city: cityTwo,
			state: stateTwo,
			postCode: postCodeTwo,
			country: countryTwo
		};

		addressModel.push(firstAddress);
		addressModel.push(secondAddress);

		return addressModel;
	};

	const handleNewAddressType = (event: any) => {
		let firstAddressType = event.target.value;
		let secondAddressType = firstAddressType === "temporary" ? "permanent" : "temporary";

		setAddressTypeOne(firstAddressType);
		setAddressTypeTwo(secondAddressType);
	};

	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<React.Fragment>
					<Grid item xs={12} sm={12}>
						<FormControl component="fieldset">
							<FormLabel component="legend">Address Type</FormLabel>
							<RadioGroup row aria-label="address"
								name="address" value={addressTypeOne} onChange={handleNewAddressType}>
								<FormControlLabel value="temporary" control={<Radio />} label="Temporary" />
								<FormControlLabel value="permanent" control={<Radio />} label="Permanent" />
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Textbox
							required
							id="addressLine1"
							name="addressLine1"
							label="Address line 1"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setAddressLine1One(e.target.value);}}
							value={addressLine1One}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Textbox
							id="addressLine2"
							name="addressLine2"
							label="Address line 2"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setAddressLine2One(e.target.value);}}
							value={addressLine2One}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Textbox
							id="addressLine3"
							name="addressLine3"
							label="Address line 3"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setAddressLine3One(e.target.value);}}
							value={addressLine3One}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Textbox
							id="city"
							name="city"
							label="City"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setCityOne(e.target.value);}}
							value={cityOne}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Textbox
							id="state"
							name="state"
							label="State"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setStateOne(e.target.value);}}
							value={stateOne}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Textbox
							required
							id="postCode"
							name="postCode"
							label="Postal code"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setPostCodeOne(e.target.value);}}
							value={postCodeOne}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Textbox
							required
							id="country"
							name="country"
							label="Country"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setCountryOne(e.target.value);}}
							value={countryOne}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
				</React.Fragment>
				{isSecondAddressVisible && <React.Fragment>
					<Grid item xs={12} sm={12}>
						<FormControl component="fieldset">
							<FormLabel component="legend">Address Type</FormLabel>
							<RadioGroup row aria-label="address" name="address" aria-disabled value={addressTypeTwo}>
								<FormControlLabel value="temporary" control={<Radio />} label="Temporary" />
								<FormControlLabel value="permanent" control={<Radio />} label="Permanent" />
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Textbox
							required
							id="addressLine1"
							name="addressLine1"
							label="Address line 1"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setAddressLine1Two(e.target.value);}}
							value={addressLine1Two}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Textbox
							id="addressLine2"
							name="addressLine2"
							label="Address line 2"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setAddressLine2Two(e.target.value);}}
							value={addressLine2Two}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Textbox
							id="addressLine3"
							name="addressLine3"
							label="Address line 3"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setAddressLine3Two(e.target.value);}}
							value={addressLine3Two}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Textbox
							id="city"
							name="city"
							label="City"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setCityTwo(e.target.value);}}
							value={cityTwo}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Textbox
							id="state"
							name="state"
							label="State"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setStateTwo(e.target.value);}}
							value={stateTwo}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Textbox
							required
							id="postCode"
							name="postCode"
							label="Postal code"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setPostCodeTwo(e.target.value);}}
							value={postCodeTwo}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Textbox
							required
							id="country"
							name="country"
							label="Country"
							fullWidth
							type={InputType.TEXT}
							onChange={(e) => {setCountryTwo(e.target.value);}}
							value={countryTwo}
							variant={TextboxVariant.STANDARD}
						/>
					</Grid>
				</React.Fragment>}
				<Grid item xs={12} sm={12}>
					<Button
						fullWidth
						variant={ButtonVariant.CONTAINED}
						color={ButtonColor.PRIMARY}
						size={ButtonSize.MEDIUM}
						text={getAddAddressButtonText()}
						onClick={() => handleShowHideNewAddress()}
					/>
				</Grid>
			</Grid>
			<React.Fragment>
				<div className={classes.buttons}>
					{<Button onClick={() => props.handleBack()} cssClass={classes.button} text={"Back"} />}
					<Button
						variant={ButtonVariant.CONTAINED}
						color={ButtonColor.PRIMARY}
						onClick={() => props.setEmployeeAddressModel(getAddressModel())}
						cssClass={classes.button}
						text={"Save Address"}
					/>
				</div>
			</React.Fragment>
		</React.Fragment>
	);
};

export default EmployeeAddress;
