import { app } from "./config";

export const get = async (urlSuffix) => {
    const res = await fetch(app.endpoint + urlSuffix, {
        method: 'GET',
    });

    return await res.json()
}

export const post = async (urlSuffix) => {
    const res = await fetch(app.endpoint + urlSuffix, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });

    return await res.json()
}


export const patch = async (urlSuffix) => {
    const res = await fetch(app.endpoint + urlSuffix, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });

    return await res.json()
}


export const discard = async (urlSuffix) => {
    const res = await fetch(app.endpoint + urlSuffix, {
        method: 'DELETE',
        
    });

    return await res.json()
}