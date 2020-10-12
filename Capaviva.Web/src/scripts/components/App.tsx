import React from "react";
import "Styles/index.scss";
import SignIn from "Components/SignIn/SignIn";
import ForgotPassword from "Components/ForgotPassword/ForgotPassword";
import ResetPassword from "Components/ResetPassword/ResetPassword";
import EmployeeDetail from "Components/Details/EmployeeDetails";
import Dashboard from "Components/Dashboard/Dashboard";
import { Route, Switch } from "react-router-dom";
import Routes from "Components/Routes/Routes";
import CreateEmployee from "Components/Employee/CreateEmployee";
import CreateProfessionalDetailsForm from "Components/Professional/CreateProfessionalDetailsForm";
import CreateScrumDetailsForm from "Components/Scrum/CreateScrumDetailsForm";
import CreateTrackDetailsForm from "Components/Track/CreateTrackDetailsForm";
import SessionService from "Services/session.service";

interface IAppState {
	isLoading: boolean;
	isUserLoggedIn: boolean;
}

class App extends React.Component<any, IAppState> {
	constructor(props: any) {
		super(props);
		this.state = {
			isLoading: true,
			isUserLoggedIn: false
		};
	}

	componentDidMount() {
		let sessionData: string|null = SessionService.getUserSession();
		let isUserLoggedIn: boolean = !!sessionData;

		this.setState({ isUserLoggedIn: isUserLoggedIn, isLoading: false });

		if (!isUserLoggedIn && (window.location.pathname !== "/" || window.location.hash.length) && (window.location.pathname !== "/forgotpassword" ) && (window.location.pathname !== "/resetpassword" )) {
			window.location.replace("/");
		}
	}

	render() {
		const { isLoading, isUserLoggedIn } = this.state;

		return (<React.Fragment>
			{isLoading && <React.Fragment />}
			{!isLoading && <React.Fragment>
				{!isUserLoggedIn && <Switch>
					<Route path="/" exact>
						<SignIn />
					</Route>
					<Route path="/forgotpassword" exact>
						<ForgotPassword />
					</Route>
					<Route path="/resetpassword" exact>
						<ResetPassword />
					</Route>
				</Switch>}
				{isUserLoggedIn && <Dashboard>
					<Switch>
						<Route path="/" exact>
							<EmployeeDetail />
						</Route>
						<Route path="/createEmployee" exact>
							<CreateEmployee />
						</Route>
						<Route path="/createProfessional" exact>
							<CreateProfessionalDetailsForm />
						</Route>
						<Route path="/createScrum" exact>
							<CreateScrumDetailsForm />
						</Route>
						<Route path="/createTrack" exact>
							<CreateTrackDetailsForm />
						</Route>
						{Routes.map((route: any) => (
							<Route exact path={route.path} key={route.path}>
								<route.component />
							</Route>
						))}
					</Switch>
				</Dashboard>}
			</React.Fragment>}
		</React.Fragment>
		);
	}
}

export default App;
