import {
	REQUEST_CATEGORIES, 
	RECEIVE_CATEGORIES
} from './types'


export const requestCategories = () =>({
	type: REQUEST_CATEGORIES,
});

export const receiveCategories = (data) =>({
	type: RECEIVE_CATEGORIES,
	categories: data
});