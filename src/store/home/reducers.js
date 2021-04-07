import {
	REQUEST_BANNER,
	RECEIVE_BANNER,
	REQUEST_EDITAR,
	RECEIVE_EDITAR,
	REQUEST_DELETE,
	RECEIVE_DELETE,
	ALERT_SUCCESS,
	REQUEST_ADDBANNER,
	RECEIVE_ADDBANNER,
	ACTIVE_MODAL,
	REQUEST_ISACTIVE_BANNER,
	RECEIVE_ISACTIVE_BANNER,
} from "./types";

const INITIAL_STATE = {
	banner: [],
	loading: false,
	editar: [],
	delete: [],
	alertSuccess: null,
	addBanner: [],
	active: false,
	isActiveBanner: null
};

export const bannerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REQUEST_BANNER:
			return {
				...state,
				loading: true,
			};
		case RECEIVE_BANNER:
			return {
				...state,
				banner: action.banner,
				loading: false,
			};
		case REQUEST_EDITAR:
			return {
				...state,
			};
		case RECEIVE_EDITAR:
			return {
				...state,
				editar: action.editar,
			};
		case REQUEST_DELETE:
			return {
				...state,
				loading: true
			};
		case RECEIVE_DELETE:
			return {
				...state,
				loading: false,
				delete: action.delete,
			};
		case ALERT_SUCCESS:
			return {
				...state,
				alertSuccess: action.alertSuccess
			};
		case REQUEST_ADDBANNER:
			return {
				...state
			};
		case RECEIVE_ADDBANNER:
			return {
				...state,
				addBanner: action.addBanner
			};
		case ACTIVE_MODAL:
			return {
				...state,
				active: action.active
			};
		
		case REQUEST_ISACTIVE_BANNER:
			return {
				...state,
			};
		case RECEIVE_ISACTIVE_BANNER:
			return {
				...state,
				isActiveBanner: action.isActiveBanner
			};
		default:
			return state;
	}
};
