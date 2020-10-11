import axios from "axios";
import { IHttpError, IHTTPResponse } from "Interfaces/Http.interface";
import { HttpRequestType } from "Types/http-request.type";

const HTTPService = {
	request(url: string,
		method: HttpRequestType,
		payload: any,
		successCallback: Function,
		errorCallback?: Function,
		alwaysExecutableCallback?: Function) {
		axios({
			method: method,
			url: url,
			data: payload,
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
			.then((response: IHTTPResponse) => {
				successCallback(response);
			})
			.catch((error: IHttpError) => {
				if (errorCallback) {
					errorCallback(error);
				} else {
					return;
				}
			})
			.then(() => {
				if (alwaysExecutableCallback) {
					alwaysExecutableCallback();
				} else {
					return;
				}
			});
	}
};

export default HTTPService;
