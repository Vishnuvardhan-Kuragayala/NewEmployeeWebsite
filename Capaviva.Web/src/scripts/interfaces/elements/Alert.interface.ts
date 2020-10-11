import { AlertType } from "Enums/elements";

export interface IAlert {
	message: string;
	title: string;
	type: AlertType;
}
