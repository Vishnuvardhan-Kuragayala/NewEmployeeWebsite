import React from 'react';
import { Table as TableElement } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { ITable } from "Interfaces/elements";
import TitleConstants from "Constants/title.constant";

export const Table: React.FunctionComponent<ITable> = (props: ITable) => {
	const { bodyData, headerData, size } = props;

	const renderTableHeader = (tableHeaderData: string[]): JSX.Element => {
		let tableHeader = tableHeaderData.map((cell: string, index: number) => {
			const data = TitleConstants[cell];

			return <TableCell key={index}>{data}</TableCell>;
		});

		return (<TableHead>
			<TableRow>
				{tableHeader}
			</TableRow>
		</TableHead>);
	};

	const renderTableBody = (tableHeaderData: string[], tableBodyData: any[]): JSX.Element => {
		let tableBody = tableBodyData.map((row: any, indexRow: number) => {
			let rowData = tableHeaderData.map((column: string, indexHeader: number) => {
				let cellData: string = String(row[column]);

				return <TableCell key={indexHeader}>{cellData}</TableCell>;
			});

			return (<TableRow key={indexRow}>
				{rowData}
			</TableRow>);
		});

		return (<TableBody>
			{tableBody}
		</TableBody>);
	};

	return (<React.Fragment>
		<TableElement size={size}>
			{headerData && renderTableHeader(headerData)}
			{(headerData && bodyData) && renderTableBody(headerData, bodyData)}
		</TableElement>
	</React.Fragment>);
};
