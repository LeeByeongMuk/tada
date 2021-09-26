import axios from 'axios';
import storage from '@/utils/storage';
import { loginApi, logoutApi, getUserStatus } from '@/api/userApi';

const LOGIN_NON = 'LOGIN_NON';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

const login = (email: string, password: string): any => {
    return async (dispatch: any) => {
        dispatch(loginRequest());

        try {
            const options = {
                data: {
                    email,
                    password,
                },
            };
            const response = await loginApi(options);

            if (response.success) {
                const { data } = response;
                const { token_type, access_token } = data;
                storage.set('loggedToken', data);
                axios.defaults.headers.common.Authorization = `${token_type} ${access_token}`;
                dispatch(saveLoggedInfo());
                alert('로그인 성공');
            } else {
                throw response;
            }
        } catch (err: any) {
            const { message } = err.data;
            storage.set('loggedToken', '');
            storage.set('loggedInfo', '');
            alert(message);
        }
    };
};

const saveLoggedToken = (user: { access_token: string }) => {
    return (dispatch: any) => {
        axios.defaults.headers.common.Authorization = `Bearer ${user.access_token}`;
        dispatch(saveLoggedInfo());
    };
};

const saveLoggedInfo = () => {
    return async (dispatch: any) => {
        try {
            const response = await getUserStatus();
            const { success } = response;

            if (success) {
                const { data } = response;
                storage.set('loggedInfo', data);
                dispatch(loginSuccess(data));
            } else {
                throw response;
            }
        } catch (err) {
            console.log(err);
        }
    };
};

const logout = () => {
    return async (dispatch: any) => {
        try {
            const response = await logoutApi();

            if (response.success) {
                const { message } = response.data;
                storage.set('loggedToken', '');
                storage.set('loggedInfo', '');
                dispatch(loginNon());
                alert(message);
            } else {
                throw response;
            }
        } catch (err: any) {
            const { message } = err.data;
            alert(message);
        }
    };
};

function loginNon() {
    return {
        type: LOGIN_NON,
    };
}

function loginRequest() {
    return {
        type: LOGIN_REQUEST,
    };
}

function loginSuccess(info: any) {
    return {
        type: LOGIN_SUCCESS,
        info,
    };
}

function loginFailure() {
    return {
        type: LOGIN_FAILURE,
    };
}

export {
    LOGIN_NON,
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    login,
    saveLoggedToken,
    saveLoggedInfo,
    logout,
    loginNon,
    loginRequest,
    loginSuccess,
    loginFailure,
};
