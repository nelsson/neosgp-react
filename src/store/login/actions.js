import { 
    REQUEST_LOGIN, 
    RECEIVE_LOGIN
} from './types'

export const requestLogin = () => ({
    type: REQUEST_LOGIN,
});

export const receiveLogin = (data) => ({
    type: RECEIVE_LOGIN,
    loginUser: data,
});
