import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { Button, Textbox } from "Components/Elements";
import { FormsTheme } from "../../../styles/themes/forms.theme";
import { IEmployeeDetailsModel } from "Interfaces/EmployeeDetails.interface";
import {
	ButtonVariant,
	ButtonColor,
	InputType,
	TextboxVariant
} from "Enums/elements";

const useStyles = FormsTheme;

interface IEmployeeDetailsProps {
	handleBack: Function;
	setEmployeeDetailsModel: Function;
}

const EmployeeDetailsForm: React.FunctionComponent<IEmployeeDetailsProps> = (props: IEmployeeDetailsProps) => {
	const classes = useStyles();
	const [employeeId, setEmployeeId] = React.useState("");
	const [corpId, setCorpId] = React.useState('');
	const [racfId, setRACFId] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [title, setTitle] = React.useState('');
	const [scrumTeamName, setScrumTeamName] = React.useState('');
	const [roleName, setRoleName] = React.useState('');
	const [deskNumber, setDeskNumber] = React.useState('');
	const [extension, setExtension] = React.useState('');
	const [mobile, setMobile] = React.useState('');
	const [additionalContact, setAdditionalContact] = React.useState('');
	const [dayOfBirth, setDayOfBirth] = React.useState('');
	const [monthOfBirth, setMonthOfBirth] = React.useState('');
	const [errorFound, setErrorFound] = React.useState(false);

	const handleChange = (handler: any, event: any) => {
		handler(event.target.value);
	};

	const getEmployeeDetailsModel = (): IEmployeeDetailsModel => {
		let employeeDetailsModel: IEmployeeDetailsModel = {
			employeeId: +employeeId,
			title: title,
			firstName: firstName,
			lastName: lastName,
			birthDateAndMonth: `${dayOfBirth}/${monthOfBirth}`,
			scrumTeamName: scrumTeamName,
			corpId: corpId,
			racfId: racfId,
			roleName: roleName,
			email: email,
			deskNumber: deskNumber,
			extn: extension,
			mobile: mobile,
			additionalContact: additionalContact
		};

		return employeeDetailsModel;
	};

	

	const validateForm = () => {
		
		//employeeID validation
		if(employeeId === '') {
			setErrorFor("employeeId", 'EmployeeId cannot be blank');
		} else if(employeeId.length !=6){
			setErrorFor("employeeId", 'Not a valid employeeId');
		 }
			else {
			setSuccessFor("employeeId");
		}
		//corpID validation
		if(corpId === '') {
			setErrorFor("corpId", 'CorpId cannot be blank');
		} else {
			setSuccessFor("corpId");
		}

		//racfID validation
		if(racfId === '') {
			setErrorFor("racfId", 'RacfId cannot be blank');
		} else {
			setSuccessFor("racfId");
		}

		//firstName validation
		if(firstName === '') {
			setErrorFor("firstName", 'First Name cannot be blank');
		} else if (!isAlphaOnly(firstName)) {
			setErrorFor("firstName", 'Not a valid First Name');
		} else {
			setSuccessFor("firstName");
		}

		//lastName validation
		if(lastName === '') {
			setErrorFor("lastName", 'Last Name cannot be blank');
		} else if (!isAlphaOnly(lastName)) {
			setErrorFor("lastName", 'Not a valid Last Name');
		} else {
			setSuccessFor("lastName");
		}
		
		//mobile validation
		if(mobile === '') {
			setErrorFor("mobile", 'Mobile number cannot be blank');
		}else if(mobile.length !=10){
			setErrorFor("mobile", 'Not a valid Mobile Number');
		 }else {
			setSuccessFor("mobile");
		}

		//title validation
		if(title === '') {
			setErrorFor("title", 'Title cannot be blank');
		}else {
			setSuccessFor("title");
		}	

		//roleName validation
		if(roleName === ''){
			setErrorFor("roleName", 'Role Name cannot be blank');
		}else {
			setSuccessFor("roleName");
		}	
		
		//dayOfBirth validation
		if(dayOfBirth === ''){
			setErrorFor("dayOfBirth", 'Date of Birth cannot be blank');
		}else {
			setSuccessFor("dayOfBirth");
		}	

		//monthOfBirth validation
		if(monthOfBirth === ''){
			setErrorFor("monthOfBirth", 'Month of Birth cannot be blank');
		}else {
			setSuccessFor("monthOfBirth");
		}
		
	


		//Email validation
		if(email === '') {
			setErrorFor("email", 'Email cannot be blank');
		} else if (!isEmail(email)) {
			setErrorFor("email", 'Not a valid email');
		} else {
			setSuccessFor("email");
		}

		if(errorFound === false)
		{
			return true
		}else{
			return false;
		}
		
	}
	
	function setErrorFor(input:any, message:any) {
			const small = document.querySelector(`small[id='${input}']`);
			console.log("small", small);
			if(small)
			{console.log("in");
			small.innerHTML = message}
			
		//formControl.className = 'form-control error';
		setErrorFound(true);
	}
	
	function setSuccessFor(input:any) {
		const small = document.querySelector(`small[id='${input}']`);
			console.log("small", small);
			if(small)
			{console.log("in");
			small.innerHTML = "";}
		
	}
		
	function isEmail(email:any) {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	}
	
	function isAlphaOnly(input:any)
	{
		return /^[A-Za-z]+$/.test(input);
	}

	
	const saveEmployee = () => {

		if(validateForm())
		{
		() => props.setEmployeeDetailsModel(getEmployeeDetailsModel());
	return true;
}
		else
		{
			return false;
		}

	}

	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<Textbox
						required
						id="employeeId"
						name="employeeId"
						label="Employee ID"
						fullWidth
						type={InputType.NUMBER}
						onChange={(e) => {setEmployeeId(e.target.value);}}
						value={employeeId.toString()}
						variant={TextboxVariant.STANDARD}
					/>
				
					<small id="employeeId" className="text-danger"></small>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Textbox
						required
						id="corpId"
						name="corpId"
						label="Corp ID"
						fullWidth
						type={InputType.TEXT}
						onChange={(e) => {setCorpId(e.target.value);}}
						value={corpId}
						variant={TextboxVariant.STANDARD}
					/>
					<small id="corpId" className="text-danger"></small>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Textbox
						required
						id="racfId"
						name="racfId"
						label="RACF ID"
						fullWidth
						type={InputType.TEXT}
						onChange={(e) => {setRACFId(e.target.value);}}
						value={racfId}
						variant={TextboxVariant.STANDARD}
					/>
					<small id="racfId" className="text-danger"></small>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Textbox
						required
						id="email"
						name="email"
						label="Email"
						fullWidth
						type={InputType.EMAIL}
						onChange={(e) => {setEmail(e.target.value);}}
						value={email}
						variant={TextboxVariant.STANDARD}
					/>
					<small id="email" className="text-danger"></small>
				</Grid>
				<Grid item xs={12} sm={2}>
					<FormControl className={classes.selectForm}>
						<InputLabel id="demo-simple-select-label">Title</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={title}
							onChange={(e) => handleChange(setTitle, e)}
							label="title"
						>
							<MenuItem value={"Mr"}>Mr</MenuItem>
							<MenuItem value={"Ms"}>Ms</MenuItem>
							<MenuItem value={"Mrs"}>Mrs</MenuItem>

						</Select>
						<small id="title" className="text-danger"></small>
					</FormControl>
				
				</Grid>
				<Grid item xs={12} sm={5}>
					<Textbox
						required
						id="firstName"
						name="firstName"
						label="First name"
						fullWidth
						type={InputType.TEXT}
						onChange={(e) => {setFirstName(e.target.value);}}
						value={firstName}
						variant={TextboxVariant.STANDARD}
					/>
					<small id="firstName" className="text-danger"></small>
				</Grid>
				<Grid item xs={12} sm={5}>
					<Textbox
						required
						id="lastName"
						name="lastName"
						label="Last name"
						fullWidth
						type={InputType.TEXT}
						onChange={(e) => {setLastName(e.target.value);}}
						value={lastName}
						variant={TextboxVariant.STANDARD}
					/>
					<small id="lastName" className="text-danger"></small>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl className={classes.selectForm}>
						<InputLabel id="demo-simple-select-label">Scrum Team</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={scrumTeamName}
							onChange={(e) => handleChange(setScrumTeamName, e)}
							label="scrumTeamName"
						>
							<MenuItem value={"customer"}>Customer</MenuItem>
							<MenuItem value={"home2"}>Home2</MenuItem>
							<MenuItem value={".net"}>.Net</MenuItem>

						</Select>
						<small id="scrumTeamName" className="text-danger"></small>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl className={classes.selectForm}>
						<InputLabel id="demo-simple-select-label">Role Name</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={roleName}
							onChange={(e) => handleChange(setRoleName, e)}
							label="roleName"
						>
							<MenuItem value={"softwarEengineer"}>Software Engineer</MenuItem>
							<MenuItem value={"seniorSoftwareEngineer"}>Senior Software Engineer</MenuItem>
							<MenuItem value={"associateConsultant"}>Associate Consultant</MenuItem>
							<MenuItem value={"consultant"}>Consultant</MenuItem>
							<MenuItem value={"seniorConsultant"}>Senior Consultant</MenuItem>
						</Select>
						<small id="roleName" className="text-danger"></small>
					</FormControl>
					
				</Grid>
				<Grid item xs={12} sm={6}>
					<Textbox
						id="deskNumber"
						name="deskNumber"
						label="Desk number"
						fullWidth
						type={InputType.NUMBER}
						onChange={(e) => {setDeskNumber(e.target.value);}}
						value={deskNumber}
						variant={TextboxVariant.STANDARD}
					/>
					<small id="deskNumber" className="text-danger"></small>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Textbox
						id="extn"
						name="extn"
						label="Extension"
						fullWidth
						type={InputType.NUMBER}
						onChange={(e) => {setExtension(e.target.value);}}
						value={extension}
						variant={TextboxVariant.STANDARD}
					/>
					<small id="extn" className="text-danger"></small>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Textbox
						required
						id="mobile"
						name="mobile"
						label="Mobile number"
						fullWidth
						type={InputType.NUMBER}
						onChange={(e) => {setMobile(e.target.value);}}
						value={mobile}
						variant={TextboxVariant.STANDARD}
					/>
					<small id="mobile" className="text-danger"></small>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Textbox
						id="additionalContact"
						name="additionalContact"
						label="Additional contact"
						fullWidth
						type={InputType.NUMBER}
						onChange={(e) => {setAdditionalContact(e.target.value);}}
						value={additionalContact}
						variant={TextboxVariant.STANDARD}
					/>
					<small id="additionalContact" className="text-danger"></small>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl className={classes.selectForm}>
						<InputLabel id="demo-simple-select-label">Date of Birth</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={dayOfBirth}
							onChange={(e) => handleChange(setDayOfBirth, e)}
							label="Date"
						>
							<MenuItem value="1">1</MenuItem>
							<MenuItem value="2">2</MenuItem>
							<MenuItem value="3">3</MenuItem>
							<MenuItem value="4">4</MenuItem>
							<MenuItem value="5">5</MenuItem>
							<MenuItem value="6">6</MenuItem>
							<MenuItem value="7">7</MenuItem>
							<MenuItem value="8">8</MenuItem>
							<MenuItem value="9">9</MenuItem>
							<MenuItem value="10">10</MenuItem>
							<MenuItem value="11">11</MenuItem>
							<MenuItem value="12">12</MenuItem>
							<MenuItem value="13">13</MenuItem>
							<MenuItem value="14">14</MenuItem>
							<MenuItem value="15">15</MenuItem>
							<MenuItem value="16">16</MenuItem>
							<MenuItem value="17">17</MenuItem>
							<MenuItem value="18">18</MenuItem>
							<MenuItem value="19">19</MenuItem>
							<MenuItem value="20">20</MenuItem>
							<MenuItem value="21">21</MenuItem>
							<MenuItem value="22">22</MenuItem>
							<MenuItem value="23">23</MenuItem>
							<MenuItem value="24">24</MenuItem>
							<MenuItem value="25">25</MenuItem>
							<MenuItem value="26">26</MenuItem>
							<MenuItem value="27">27</MenuItem>
							<MenuItem value="28">28</MenuItem>
							<MenuItem value="29">29</MenuItem>
							<MenuItem value="30">30</MenuItem>
							<MenuItem value="31">31</MenuItem>
						</Select>
						<small id="dayOfBirth" className="text-danger"></small>
					</FormControl>
					
					<FormControl className={classes.selectForm}>
						<InputLabel id="demo-simple-select-label">Month</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={monthOfBirth}
							onChange={(e) => handleChange(setMonthOfBirth, e)}
							label="Month"
						>
							<MenuItem value={1}>January</MenuItem>
							<MenuItem value={2}>February</MenuItem>
							<MenuItem value={3}>March</MenuItem>
							<MenuItem value={4}>April</MenuItem>
							<MenuItem value={5}>May</MenuItem>
							<MenuItem value={6}>June</MenuItem>
							<MenuItem value={7}>July</MenuItem>
							<MenuItem value={8}>August</MenuItem>
							<MenuItem value={9}>September</MenuItem>
							<MenuItem value={10}>October</MenuItem>
							<MenuItem value={11}>November</MenuItem>
							<MenuItem value={12}>December</MenuItem>
						</Select>
						<small id="monthOfBirth" className="text-danger"></small>
					</FormControl>
					
				</Grid>
			</Grid>
			<React.Fragment>
				<div className={classes.buttons}>
					{<Button onClick={() => props.handleBack()} cssClass={classes.button} text={"Back"} />}
					<Button
						variant={ButtonVariant.CONTAINED}
						color={ButtonColor.PRIMARY}
						onClick={(e) => saveEmployee()}
						cssClass={classes.button}
						text={"Save Employee"}
					/>
				</div>
			</React.Fragment>
		</React.Fragment>
	);
};

export default EmployeeDetailsForm;
