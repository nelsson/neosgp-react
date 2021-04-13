import { 
    REQUEST_REGISTER, 
    RECEIVE_REGISTER
} from './types';

const INITIAL_STATE = {
    registerUser: null,
    loading: false,
};

export const registerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_REGISTER:
            return {
                ...state,
                loading: true,
            };
        case RECEIVE_REGISTER:
            return {
                ...state,
                registerUser: action.registerUser,
                loading: false,
            };
        default:
            return state;
    };
};