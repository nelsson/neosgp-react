import { REQUEST_PROJECTS, RECEIVE_PROJECTS } from './types';

const INITIAL_STATE = {
    listProjects: null,
    loading: false,
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
        default:
            return state;
    };
};