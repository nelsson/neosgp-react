import { 
    REQUEST_REGISTER, 
    RECEIVE_REGISTER
} from './types'

export const requestRegister = () => ({
    type: REQUEST_REGISTER,
});

export const receiveRegister = (data) => ({
    type: RECEIVE_REGISTER,
    registerUser: data,
});
