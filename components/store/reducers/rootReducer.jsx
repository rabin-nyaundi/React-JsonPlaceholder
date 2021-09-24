import { combineReducers } from "redux";
import { fetch_albums_reducer, fetch_posts_reducer, fetch_todos_reducer, fetch_users_reducer } from ".";

const rootReducer = combineReducers({
    allPosts: fetch_posts_reducer,
    allUsers: fetch_users_reducer,
    allAlbums : fetch_albums_reducer,
    allTodos: fetch_todos_reducer,
})


export default rootReducer;