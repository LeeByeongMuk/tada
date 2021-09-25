interface Storage {
    set: any;
    get: any;
    remove: any;
}

const storage: Storage = {
    set: (key: string, object: object | string) => {
        if (localStorage) {
            localStorage[key] =
                typeof object === 'string' ? object : JSON.stringify(object);
        }
    },
    get: (key: string) => {
        if (!localStorage) return null;

        if (!localStorage[key]) {
            return null;
        }

        try {
            return JSON.parse(localStorage[key]);
        } catch (e) {
            return localStorage[key];
        }
    },
    remove: (key: string) => {
        if (!localStorage) return null;

        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
    },
};

export default storage;
