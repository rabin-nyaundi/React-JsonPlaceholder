import { app } from "./config";

export const get = async (urlSuffix) => {
    const res = await fetch(app.endpoint + urlSuffix, {
        method: 'GET',
    });

    return await res.json()
}

export const post = async (urlSuffix, postData) => {
    const res = await fetch(app.endpoint + urlSuffix, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });

    return await res.json()
}

export const openPost = async (urlSuffix, postData) => {
    const res = await fetch(app.endpoint + urlSuffix, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });

    return await res.json()
}


export const patch = async (urlSuffix, postData) => {
    const res = await fetch(app.endpoint + urlSuffix, {
        method: 'PUT',
        body: JSON.stringify(postData),
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