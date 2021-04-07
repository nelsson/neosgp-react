import {
	requestBanner,
	receiveBanner,
	requestEditar,
	receiveEditar,
	requestDelete,
	receiveDelete,
	alertSuccess,
	requestAddBanner,
	receiveAddBanner,
	activeModal,
	requestIsActiveBanner,
	receiveIsActiveBanner,
} from "./actions";
import { routesApi } from "../../routesApi";

export const fetchBanner = () => {
	return (dispatch) => {
		dispatch(requestBanner());
		return fetch(routesApi.banners)
			.then((response) => response.json())
			.then((json) => {
				dispatch(receiveBanner(json.banners));
			});
	};
};

export const fetchEditar = (id) => {
	return (dispatch) => {
		dispatch(requestEditar());
		return fetch(`${routesApi.editBannerId}${id}`)
			.then((response) => {
				return response.json();
			})
			.then((res) => {
				dispatch(receiveEditar(res.banner));
			});
	};
};



export const fetchDelete = (deleteData) => {
	return (dispatch) => {
		dispatch(requestDelete());
		return fetch(`${routesApi.banner}/${deleteData}`, {
				method: 'DELETE'
			}).then(response => {
				return response.json().then((data) => {
					if(response.status === 200){
						const messageAlert = {
							title: "El banner ha sido eliminado",
							icon: "success",
						}
						dispatch(receiveDelete(data));
						dispatch(alertSuccess(messageAlert));
					}
				});
			})
			
	};
};


export const fetchAddBanner = (datos) =>{
	return (dispatch) => {
		dispatch(requestAddBanner());
		return fetch(`${routesApi.banner}`, {
			method: 'POST',
			body: datos,
		}).then(response => {
			console.log("fetchAddBanner -> response", response)
			return response.json();
		})
		.then((data) => {
			console.log("fetchAddBanner -> data", data)
			dispatch(receiveAddBanner(data))
			dispatch(activeModal(true))
		});

	}
}

export const fetchIsActiveBanner = (data) =>{
	return (dispatch) => {
		dispatch(requestIsActiveBanner());
		return fetch("http://161.35.122.167:3001/api/hide-banner", {
			method: 'PUT',
			body:JSON.stringify(data),
			headers:{
				'Content-Type': 'application/json',
			}
		}).then(resp => {
			return resp.json().then((data) => {
				dispatch(receiveIsActiveBanner(data))
			})
		})
		
	}
}
