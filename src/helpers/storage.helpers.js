

export const STORAGE_USER_KEY = "_XfgWsce2";


export const setUserId = (id = "") => {
    window.localStorage.setItem(STORAGE_USER_KEY, id ? window.atob(id): "");
}

export const getUserId = () => {
    return window.btoa(window.localStorage.getItem(STORAGE_USER_KEY));
}