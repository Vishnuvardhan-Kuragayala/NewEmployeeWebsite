export interface IHTTPResponse {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: IConfig;
	request?: any;
}

export interface IHttpError {
	config: any;
	code?: string;
	message: string;
	name: string;
	response?: any;
	request?: any;
	isAxiosError: boolean;
	toJSON: () => object;
  }

export interface IConfig {
	url?: string;
	method?: string;
	data?: any;
	headers?: any;
	transformRequest?: any;
	transformResponse?: any;
	timeout?: number;
	xsrfCookieName?: string;
	xsrfHeaderName?: string;
	maxContentLength?: number;
	maxBodyLength?: number;
}