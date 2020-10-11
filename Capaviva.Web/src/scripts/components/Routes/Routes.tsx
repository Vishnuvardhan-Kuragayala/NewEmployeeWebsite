import EmployeeDetails from "Components/Details/EmployeeDetails";
import ProfessionalDetails from "Components/Details/ProfessionalDetails";
import ScrumDetails from "Components/Details/ScrumDetails";
import TrackDetails from "Components/Details/TrackDetails";

const Routes = [
	{
		path: "/employee",
		sidebarName: "Employee",
		component: EmployeeDetails,
		icon: "employee",
		isSelected: true,
		title: "Employee",
		sortOrder: 1
	},
	{
		path: "/professional",
		sidebarName: "Professional",
		component: ProfessionalDetails,
		icon: "professional",
		isSelected: true,
		title: "Professional Details",
		sortOrder: 2
	},
	{
		path: "/scrum",
		sidebarName: "Scrum",
		component: ScrumDetails,
		icon: "scrum",
		isSelected: true,
		title: "Scrum Details",
		sortOrder: 3
	},
	{
		path: "/track",
		sidebarName: "Track",
		component: TrackDetails,
		icon: "track",
		isSelected: true,
		title: "Track Details",
		sortOrder: 4
	}
];

export default Routes;
