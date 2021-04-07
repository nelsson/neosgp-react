import {
	REQUEST_RECETAS,
	RECEIVE_RECETAS,
} from "./types";

const INITIAL_STATE = {
   recetas: [],
   loading: false,
};

export const recetasReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REQUEST_RECETAS:
			return {
				...state,
				loading: true,
			};
		case RECEIVE_RECETAS:
			return {
				...state,
				recetas: action.recetas,
				loading: false,
			};
		default:
			return state;
	}
};
