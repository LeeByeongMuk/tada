import axios from 'axios';

const request = async (options: object) => {
    try {
        const response = await axios(options);
        return {
            isError: false,
            ...response.data,
        };
    } catch (err: any) {
        const message = err.err.response.data.message;
        return {
            isError: true,
            message: message,
            ...err,
        };
    }
};

export default request;
