import { 
    requestProjects, 
    receiveProjects,
    requestCreateProject,
    receiveCreateProject
} from './actions';

export const getReceiveProjects = (data) => {
    return (dispatch) => {
        dispatch(requestProjects());
        return fetch('http://157.230.190.228/api-neosgp/wp-json/api/list-projects', {
            // headers:{
            //     Authorization:`Bearer ${data.token}`
            // }
        }).then((response) => {
            return response.json().then((data) => {
                dispatch(receiveProjects(data));
            });
        });
    };
};

export const fetchCreateProject = (data) =>{
	return (dispatch) => {
		dispatch(requestCreateProject());
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
			dispatch(receiveCreateProject(data))
		});


	}
}