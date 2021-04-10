import { requestProjects, receiveProjects } from './actions';

export const getReceiveProjects = (data) => {
    return (dispatch) => {
        dispatch(requestProjects());
        return fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
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