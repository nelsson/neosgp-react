import {
	requestRecetas,
	receiveRecetas,
} from "./actions";

import { routesApi } from "../../routesApi";

export const fetchRecetas = () => {
	return (dispatch) => {
		dispatch(requestRecetas());
		return fetch(routesApi.recetas)
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				console.log("fetchRecetas -> json", json)
				dispatch(receiveRecetas(json.recipes));
			});
	};
};