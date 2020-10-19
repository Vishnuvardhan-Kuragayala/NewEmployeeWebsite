export interface IForgotPassword {
	onForgotPassword: Function;
}

export interface IForgotPasswordModel {
	email: string;
}

export interface IResetPasswordModel {
	confirmedEmail: string;
	password: string;
	confirmpassword: string;

}
