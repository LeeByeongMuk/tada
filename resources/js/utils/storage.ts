interface GetKey {
    (key: string): void;
}

interface GetKeyValue {
    (key: string, value: string | object): void;
}

interface Storage {
    set: GetKeyValue;
    get: GetKey;
    remove: GetKey;
}

const storage: Storage = {
    set: (key: string, value: string | object) => {
        if (localStorage) {
            localStorage[key] =
                typeof value === 'string' ? value : JSON.stringify(value);
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
