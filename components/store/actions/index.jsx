import * as actionTypes from './types';
import axios from 'axios';
import {app} from '../../utils/config';


export const fetchUsers = () => async dispatch => {
    const res = await axios.get(app.endpoint + '/users')
    dispatch({type: actionTypes.GET_USERS, payload: res.data})
}


export const fetchPosts = () => async dispatch => {
    const res = await axios.get(app.endpoint + '/posts')
    dispatch({type: actionTypes.GET_POSTS, payload: res.data})
}

export const fetchAlbums = () => async dispatch => {
    const res = await axios.get(app.endpoint + '/albums')
    dispatch({type: actionTypes.GET_ALBUMS, payload: res.data})
}

export const fetchTodos = () => async dispatch => {
    const res = await axios.get(app.endpoint + '/todos')
    dispatch({type: actionTypes.GET_TODOS, payload: res.data})
}


export const addUser = (user) => async dispatch => {
    const res = await axios.post(app.endpoint + '/users', {user})
    dispatch({
        type: actionTypes.ADD_USER,
        payload: {
            id: res.data.id,
            name: res.data.user.name
        }
    })
    console.log(res.data)
}


export const deleteUser = (id) => async dispatch => {
    const res = await axios.delete(app.endpoint + `/users/${id}`)
    dispatch({
        type: actionTypes.DELETE_USER,
        payload: id
    })
    console.log(id)
}

export const updateUser = (id, user) => async dispatch => {
    const { data } = await axios.put(app.endpoint + `/users/${id}`,{user})
    
    dispatch({
        type: actionTypes.EDIT_USER,
        payload: data
    })

    console.log("data after put request",data)
}


