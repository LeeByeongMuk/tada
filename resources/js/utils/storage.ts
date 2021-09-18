const storage: object = {
    set: (key: string, object: object | string) => {
        if(!localStorage) return;
        localStorage[key] = (typeof object) === 'string' ? object : JSON.stringify(object);
    },
    get: (key: string) => {
        if(!localStorage) return null;

        if(!localStorage[key]) {
            return null;
        }

        try {
            const parsed: object = JSON.parse(localStorage[key]);
            return parsed;
        } catch(e) {
            return localStorage[key];
        }
    },
    remove: (key: string) => {
        if(!localStorage) return null;

        if(localStorage[key]) {
            localStorage.removeItem(key);
        }
    }
};

export default storage;
