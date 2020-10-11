import { IIconMapper } from "Interfaces/elements";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AssignmentIcon from "@material-ui/icons/Assignment";

const IconMapper: IIconMapper = {
	employee: {
		iconName: "employee",
		iconComponent: AccountBoxIcon
	},
	professional: {
		iconName: "professional",
		iconComponent: AssignmentIcon
	},
	scrum: {
		iconName: "scrum",
		iconComponent: AssessmentIcon
	},
	track: {
		iconName: "track",
		iconComponent: DashboardIcon
	}
};

export default IconMapper;
