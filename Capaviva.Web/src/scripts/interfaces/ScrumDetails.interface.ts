export interface IScrumDetails {
	scrumTeamName: string;
	firstSpoc: string;
	secondSpoc: string;
	platformManagerName: string;
	scrumMasterName:  string;
}

export interface ICreateScrumDetailsModel {
	scrumTeamName: string;
	scrumMasterName: string;
	firstSpoc: string;
	secondSpoc: string;
	platformManagerName: string;
}