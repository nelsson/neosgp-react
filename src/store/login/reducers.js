import { 
    REQUEST_LOGIN, 
    RECEIVE_LOGIN
} from './types';

const INITIAL_STATE = {
    loginUser: null,
    loading: false,
};

export const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {
                ...state,
                loading: true,
            };
        case RECEIVE_LOGIN:
            return {
                ...state,
                loginUser: action.loginUser,
                loading: false,
            };
        default:
            return state;
    };
};