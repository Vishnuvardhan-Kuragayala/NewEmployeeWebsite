export interface IEmployeeDetails {
	employeeId: number;
	title: string;
	firstName: string;
	lastName: string;
	emailAddress?: string;
	alternateEmail?: string;
	birthDateAndMonth: string;
	corpId?: string;
	deskNumber: string;
	extn: string;
	mobile: string;
	additionalContact: string;
	city?: string;
	racfId?: string;
	roleName: string;
	scrumTeamName: string;
	active: boolean;
	createdDate: string;
	updatedDate?: string;
	address: Address[];
}

export interface Address {
	id: number;
	addressType: string;
	addressLine1: string;
	addressLine2: string;
	city: string;
	state: string;
	postCode: string;
	country?: string;
}

export interface IEmployeeDetailsModel {
	employeeId: number;
	title: string;
	firstName: string;
	lastName: string;
	birthDateAndMonth: string;
	scrumTeamName: string;
	corpId: string;
	racfId: string;
	roleName: string;
	email: string;
	deskNumber: string;
	extn: string;
	mobile: string;
	additionalContact: string;
}
  
export interface ICreateAddressModel {
	addressType: string;
	addressLine1: string;
	addressLine2: string;
	addressLine3: string;
	city: string;
	state: string;
	postCode: string;
	country: string;
}

export interface ICreateEmployeeModel {
	employeeId: number;
	title: string;
	firstName: string;
	lastName: string;
	birthDateAndMonth: string;
	scrumTeamName: string;
	corpId: string;
	racfId: string;
	roleName: string;
	email: string;
	deskNumber: string;
	extn: string;
	mobile: string;
	additionalContact: string;
	address: ICreateAddressModel[];
}