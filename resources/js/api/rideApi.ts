import request from '@/utils/request';

const rideCreateUrl = '/api/ride';

const getRideData = async ({ id }: { id: string }) => {
    const url = `/api/ride/${id}`;

    try {
        const response = await request({
            method: 'get',
            url: url,
        });
        const { isError } = response;

        if (!isError) {
            return {
                success: true,
                data: response,
            };
        } else {
            throw response.response.data;
        }
    } catch (err) {
        return {
            success: false,
            data: err,
        };
    }
};

const getRideEditData = async ({ id }: { id: string }) => {
    const url = `/api/ride/${id}/edit`;

    try {
        const response = await request({
            method: 'get',
            url: url,
        });
        const { isError } = response;

        if (!isError) {
            return {
                success: true,
                data: response,
            };
        } else {
            throw response.response.data;
        }
    } catch (err) {
        return {
            success: false,
            data: err,
        };
    }
};

const rideCreate = async ({ ...options }) => {
    try {
        const response = await request({
            method: 'post',
            url: rideCreateUrl,
            ...options,
        });
        const { isError } = response;

        if (!isError) {
            return {
                success: true,
                data: response,
            };
        } else {
            throw response.response.data;
        }
    } catch (err) {
        return {
            success: false,
            data: err,
        };
    }
};

const rideUpdate = async ({ ...options }) => {
    const id = options.data.id;
    const url = `/api/ride/${id}`;

    try {
        const response = await request({
            method: 'put',
            url: url,
            ...options,
        });
        const { isError } = response;

        if (!isError) {
            return {
                success: true,
                data: response,
            };
        } else {
            throw response.response.data;
        }
    } catch (err) {
        return {
            success: false,
            data: err,
        };
    }
};

const rideDelete = async ({ id }: { id: string }) => {
    const url = `/api/ride/${id}`;

    try {
        const response = await request({
            method: 'delete',
            url: url,
        });
        const { isError } = response;

        if (!isError) {
            return {
                success: true,
                data: response,
            };
        } else {
            throw response.response.data;
        }
    } catch (err) {
        return {
            success: false,
            data: err,
        };
    }
};

export { getRideData, getRideEditData, rideCreate, rideUpdate, rideDelete };
