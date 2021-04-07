import { REQUEST_USER, RECEIVE_USER, REQUEST_DELETE, RECEIVE_DELETE, ALERT_DELETE } from './types';


export const requestUser = () =>({
	type: REQUEST_USER
})

export const receiveUser = (data) =>({
	type : RECEIVE_USER,
	users: data
})


export const requestDelete = () =>({
	type: REQUEST_DELETE
})

export const receiveDelete = (data) =>({
	type : RECEIVE_DELETE,
	deleteUser: data
})

export const alertDelete = (eliminar) =>({
	type : ALERT_DELETE,
	alertDelete: eliminar
})