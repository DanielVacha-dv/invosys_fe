
import axios from "axios";

// const API_URL = "http://localhost:5000";
// real backend address
const API_URL = "http://localhost:8090/v1";

export const ApiGet = (url, par) => {
	return axios({ method: "get", url: API_URL + url, params: par })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			throw error;
		});
};

export const ApiPost = (url, body) => {
	return axios({ method: "post", url: API_URL + url, data: body })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			throw error;
		});
};

export const ApiPut = (url, body = {}) => {
	return axios({ method: "put", url: API_URL + url, data: body })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			throw error;
		});
};

export const ApiDelete = (url) => {
	return axios({ method: "delete", url: API_URL + url })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			throw error;
		});
};