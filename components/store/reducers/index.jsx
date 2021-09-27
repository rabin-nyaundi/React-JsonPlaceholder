import _ from 'lodash'
import { combineReducers } from 'redux';
import { SET_USERS, SET_POSTS, GET_USERS, GET_POSTS, GET_ALBUMS, GET_TODOS, ADD_USER, DELETE_USER, EDIT_USER } from '../actions/types';
import { addNewItem } from '../utils/utils';


const initailState = {
    users : [],
    currentUser: {}
}

const initialPosts = {
    currentPosts : null,
    isLoading: true
}


export const users_reducer =  (state=initailState, action) =>{
    switch (action.type) {
        case SET_USERS:
           return {
               ...state,
                currentUsers : action.payload.currentUsers,
            }
    
        default:
            return state
    }
}

export const posts_reducer = (state=initialPosts, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                currentPosts : action.payload.currentPosts
            }

        default:
            return state;
    }
}

export const fetch_users_reducer = (state=initailState, action) =>{
    switch (action.type) {
        case GET_USERS:
            return {
                users: action.payload,
            }

        case ADD_USER:
            return {
                ...state.users,
                users: state.users.concat(action.payload)
            };

        case EDIT_USER:
            return {
                // ...state.users,
                users: updateItem(state, action)
            }


        case DELETE_USER:
            return {
                ...state.users,
                users: state.users.filter(user => user.id !== action.payload)
            }

        default:
            return state;
    }
}

export const fetch_posts_reducer = (state={posts: 0}, action) =>{
    switch (action.type) {
        case GET_POSTS:
            return {
                posts: action.payload
            }
        default:
            return state;
    }
}

export const fetch_albums_reducer = (state={albums: 0}, action) =>{
    switch (action.type) {
        case GET_ALBUMS:
            return {
                albums: action.payload
            }
        default:
            return state;
    }
}


export const fetch_todos_reducer = (state={todos: 0}, action) =>{
    switch (action.type) {
        case GET_TODOS:
            return {
                todos: action.payload
            }
        default:
            return state;
    }
}




function updateItem(state, action) {
    const users = [...state.users]
    // const user = action.payload.id
    const index = _.findIndex(users, ['id', action.payload.id])

    console.log("index of payload",index)
    users[index] = {...action.payload.user}

    return users;
}