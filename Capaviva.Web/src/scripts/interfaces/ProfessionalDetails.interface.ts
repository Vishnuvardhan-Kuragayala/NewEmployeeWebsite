export interface IProfessionalDetails {
	groupId: number;
	employeeId: number;
	team: string;
	supervisorId: number;
	peerId: number;
	projectTrackCode: number;
	scrumTeamId: number;
	isBillable: string;
	designation: string;
	designationEffectiveDate: string;
}

export interface ICreateProfessionalDetails {
	employeeId: number;
	team?: string;
	supervisorId: number;
	peerId: number;
	projectTrackCode: number;
	scrumTeamId?: number;
	isBillable: string;
	designation: string;
	designationEffectiveDate: string;
}
