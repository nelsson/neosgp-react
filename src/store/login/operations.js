import { 
    requestLogin, 
    receiveLogin
} from './actions';

export const fetchLogin = (data) =>{
	return (dispatch) => {
		dispatch(requestLogin());
		return fetch(`http://157.230.190.228/api-neosgp/wp-json/api/add-project`, {
			method: 'POST',
			body: JSON.stringify(data),
            headers :{
                'Content-Type': 'application/json'
            }
		}).then(response => {
			console.log("que me traessss", response)
			return response.json();
		})
		.then((data) => {
			console.log("fetch new projects -> data", data)
			dispatch(receiveLogin(data))
		});


	}
}