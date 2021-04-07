import { requestUser, receiveUser, requestDelete, receiveDelete, alertDelete } from './actions';
import { routesApi } from "../../routesApi";

export const fetchUser = () => {
	return (dispatch) =>{
		dispatch(requestUser())
		return fetch(`${routesApi.users}`)
		.then((response) => {
			return response.json()
		})
		.then((json) => {
			dispatch(receiveUser(json.users));
		});
	}
}



export const fetchDeleteUser = (data) => {
	return (dispatch) =>{
		dispatch(requestDelete())
		return fetch(`${routesApi.user}${data}`,{
				method: 'DELETE',
			})
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				dispatch(receiveDelete(json));
				dispatch(alertDelete(true));
			})
	}
}
