import {
	requestCategories,
	receiveCategories,
} from "./actions";

import { routesApi } from "../../routesApi";

export const fetchCategories = () => {
	return (dispatch) => {
		dispatch(requestCategories());
		return fetch(routesApi.categories)
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				dispatch(receiveCategories(json.categories));
			});
	};
};