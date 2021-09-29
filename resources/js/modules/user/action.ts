import axios from 'axios';
import { getUserStatus, loginApi, logoutApi } from '@/api/userApi';
import storage from '@/utils/storage';
import {
    LOGIN_FAILURE,
    LOGIN_NON,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
} from '@/modules/user/constant';

const loginNon = () => {
    return {
        type: LOGIN_NON,
    };
};

const loginRequest = () => {
    return {
        type: LOGIN_REQUEST,
    };
};

const loginSuccess = (info: any) => {
    return {
        type: LOGIN_SUCCESS,
        info,
    };
};

const loginFailure = () => {
    return {
        type: LOGIN_FAILURE,
    };
};

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

export {
    loginNon,
    loginRequest,
    loginSuccess,
    loginFailure,
    login,
    saveLoggedToken,
    saveLoggedInfo,
    logout,
};
