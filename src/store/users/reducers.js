import { REQUEST_USER, RECEIVE_USER, REQUEST_DELETE, RECEIVE_DELETE, ALERT_DELETE } from './types'

const INITIAL_STATE = {
   users:[],
	loading: false,
	deleteUser:[],
	alertDelete: false
}

export const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REQUEST_USER:
			return {
				...state,
				loading: true,
			};
		case RECEIVE_USER:
			return {
				...state,
				users: action.users,
				loading: false,
			}
		case REQUEST_DELETE:
			return {
				...state
			}
		case RECEIVE_DELETE:
			return {
				...state,
				deleteUser: action.deleteUser
			}
		case ALERT_DELETE:
			return {
				...state,
				alertDelete: action.alertDelete
			}
		default:
			return state;
	}
};