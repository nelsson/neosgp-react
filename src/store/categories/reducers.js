import {
	REQUEST_CATEGORIES,
	RECEIVE_CATEGORIES,
} from "./types";

const INITIAL_STATE = {
	categories: [],
	loading: false,
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REQUEST_CATEGORIES:
			return {
				...state,
				loading: true,
			};
		case RECEIVE_CATEGORIES:
			return {
				...state,
				categories: action.categories,
				loading: false,
			};
		default:
			return state;
	}
};