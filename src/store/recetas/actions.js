import {
	REQUEST_RECETAS, 
	RECEIVE_RECETAS
} from './types'


export const requestRecetas = () =>({
	type: REQUEST_RECETAS,
});

export const receiveRecetas = (data) =>({
	type: RECEIVE_RECETAS,
	recetas: data
});