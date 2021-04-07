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
} from './types'


export const requestBanner = () =>({
	type: REQUEST_BANNER,
});

export const receiveBanner = (data) =>({
	type: RECEIVE_BANNER,
	banner: data
});


export const requestEditar = () =>({
	type: REQUEST_EDITAR,
});
export const receiveEditar = (id) =>({
	type: RECEIVE_EDITAR,
	editar:id
});


export const requestDelete = () => ({
	type: REQUEST_DELETE
})

export const receiveDelete = (deleteData) => ({
	type: RECEIVE_DELETE,
	delete: deleteData

})


export const alertSuccess = (data) => ({
	type: ALERT_SUCCESS,
	alertSuccess: data

})


export const requestAddBanner = () => ({
	type: REQUEST_ADDBANNER
})

export const receiveAddBanner = (datos) => ({
	type: RECEIVE_ADDBANNER,
	addBanner: datos

})

export const activeModal = (active) => ({
	type: ACTIVE_MODAL,
	active: active

})


export const requestIsActiveBanner = () => ({
	type: REQUEST_ISACTIVE_BANNER
})

export const receiveIsActiveBanner = (data) => ({
	type: RECEIVE_ISACTIVE_BANNER,
	isActiveBanner: data

})