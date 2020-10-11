import { TableSize } from "Enums/elements";

export interface ITable {
	bodyData: any[];
	headerData: string[];
	size: TableSize;
}
