const employeeList = require("App/data/employeeList.json");

import { IEmployeeDetails } from "Interfaces/EmployeeDetails.interface";

const EmployeeDetailsService = {
	getEmployeeData(): IEmployeeDetails {
		let employeeData: IEmployeeDetails = {
			size: "small",
			tableBodyData: employeeList.tableBodyData,
			tableHeaderData: employeeList.tableHeaderData,
			title: "Employee details"
		};

		return employeeData;
	}
};

export default EmployeeDetailsService;
