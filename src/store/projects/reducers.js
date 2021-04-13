import { 
    REQUEST_PROJECTS, 
    RECEIVE_PROJECTS,
    REQUEST_CREATE_PROJECTS,
    RECEIVE_CREATE_PROJECTS
} from './types';

const INITIAL_STATE = {
    listProjects: null,
    loading: false,
    createProject: null
};

export const projectsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_PROJECTS:
            return {
                ...state,
                loading: true,
            };
        case RECEIVE_PROJECTS:
            return {
                ...state,
                listProjects: action.listProjects,
                loading: false,
            };
        
        case REQUEST_CREATE_PROJECTS:
            return {
                ...state,
            };
        case RECEIVE_CREATE_PROJECTS:
            return {
                ...state,
                createProject: action.createProject,
            };
        default:
            return state;
    };
};