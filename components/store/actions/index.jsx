import * as actionTypes from './types';
import axios from 'axios';
import { app } from '../../utils/config';


export const fetchUsers = () => async dispatch =>{
    const res = await axios.get(app.endpoint+'/users')
    dispatch({
        type: actionTypes.GET_USERS,
        payload: res.data
    })
}


export const fetchPosts = () => async dispatch =>{
    const res = await axios.get(app.endpoint+'/posts')
    dispatch({
        type: actionTypes.GET_POSTS,
        payload: res.data
    })
}

export const fetchAlbums = () => async dispatch =>{
    const res = await axios.get(app.endpoint+'/albums')
    dispatch({
        type: actionTypes.GET_ALBUMS,
        payload: res.data
    })
}

export const fetchTodos = () => async dispatch =>{
    const res = await axios.get(app.endpoint+'/todos')
    dispatch({
        type: actionTypes.GET_TODOS,
        payload: res.data
    })
}

