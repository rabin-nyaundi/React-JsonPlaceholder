import * as actionTypes from '../types/types';
import axios from 'axios';
import {app} from '../../utils/config';


// Users redux actions
export const fetchUsers = () => async dispatch => {
    const res = await axios.get(app.endpoint + '/users')
    dispatch({type: actionTypes.GET_USERS, payload: res.data})
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
    await axios.delete(app.endpoint + `/users/${id}`)
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



// Posts redux actions
export const fetchPosts = () => async dispatch => {
    const res = await axios.get(app.endpoint + '/posts')
    dispatch({type: actionTypes.GET_POSTS, payload: res.data})
}


export const addPost = (post) => async dispatch => {
    const res = await axios.post(app.endpoint + '/posts', {post})
    dispatch({
        type: actionTypes.ADD_POST,
        payload: {
            id: res.data.id,
            title: res.data.post.title,
            body: res.data.post.body
        }
    })
    console.log(res.data)
}


export const deletePost = (id) => async dispatch => {
    await axios.delete(app.endpoint + `/posts/${id}`)
    dispatch({
        type: actionTypes.DELETE_POST,
        payload: id
    })

    console.log(id)
}

export const updatePost = (id, post) => async dispatch => {
    const { data } = await axios.put(app.endpoint + `/posts/${id}`,{post})
    
    dispatch({
        type: actionTypes.EDIT_POST,
        payload: data
    })

    console.log("data after put request",data)
}


// todos actions
export const fetchTodos = () => async dispatch => {
    const res = await axios.get(app.endpoint + '/todos')
    dispatch({type: actionTypes.GET_TODOS, payload: res.data})
}


export const addTodo = (todo) => async dispatch => {
    const res = await axios.post(app.endpoint + '/todos', {todo})
    dispatch({
        type: actionTypes.ADD_TODO,
        payload: {
            id: res.data.id,
            title: res.data.todo.title,
        }
    })
    console.log(res.data)
}


export const deleteTodo = (id) => async dispatch => {
    await axios.delete(app.endpoint + `/todos/${id}`)
    dispatch({
        type: actionTypes.DELETE_TODO,
        payload: id
    })

    console.log(id)
}

export const updateTodo = (id, todo) => async dispatch => {
    const { data } = await axios.put(app.endpoint + `/todos/${id}`,{todo})
    
    dispatch({
        type: actionTypes.EDIT_TODO,
        payload: data,
    })

    console.log("data after put request",data)
}


// Albums actions
export const fetchAlbums = () => async dispatch => {
    const res = await axios.get(app.endpoint + '/albums')
    dispatch({type: actionTypes.GET_ALBUMS, payload: res.data})
}






