import storage from '@/utils/storage';
import { loginApi, logoutApi, getUserStatus } from '@/api/userApi';
import axios from 'axios';

export const LOGIN_NON = 'LOGIN_NON';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (email: any, password: any): any => {
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

export const saveLoggedToken = (user: { access_token: any }) => {
    return (dispatch: any) => {
        axios.defaults.headers.common.Authorization = `Bearer ${user.access_token}`;
        dispatch(saveLoggedInfo());
    };
};

export const saveLoggedInfo = () => {
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

export const logout = () => {
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

export function loginNon() {
    return {
        type: LOGIN_NON,
    };
}

export function loginRequest() {
    return {
        type: LOGIN_REQUEST,
    };
}

export function loginSuccess(info: any) {
    return {
        type: LOGIN_SUCCESS,
        info,
    };
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE,
    };
}
