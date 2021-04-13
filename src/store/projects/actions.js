import { 
    REQUEST_PROJECTS, 
    RECEIVE_PROJECTS,
    REQUEST_CREATE_PROJECTS,
    RECEIVE_CREATE_PROJECTS
} from './types'

export const requestProjects = () => ({
    type: REQUEST_PROJECTS,
});

export const receiveProjects = (data) => ({
    type: RECEIVE_PROJECTS,
    listProjects: data,
});



export const requestCreateProject = () => ({
    type: REQUEST_CREATE_PROJECTS,
});
export const receiveCreateProject = (data) => ({
    type: RECEIVE_CREATE_PROJECTS,
    createProject: data,
});