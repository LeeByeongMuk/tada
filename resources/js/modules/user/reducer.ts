import {
    LOGIN_NON,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '@/modules/user/constant';

interface Action {
    type: string;
    info: object;
}

const defaultState = {
    isLoggedIn: false,
    fetchingUpdate: false,
    info: {},
};

const userReducer = (state = defaultState, action: Action) => {
    switch (action.type) {
        case LOGIN_NON:
            return {
                ...state,
                ...defaultState,
            };
        case LOGIN_REQUEST:
            return {
                ...state,
                fetchingUpdate: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                isLoggedIn: true,
                info: action.info,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default userReducer;
