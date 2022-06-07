import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        //console.log(post)
        const { data } = await api.createPost(post);
        //console.log(data)
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}
export const updatePost = (id, post) => async (dispatch) => {
    try {

        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {

        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {

        const { data } = await api.likePost(id);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

/*export const likePost = (id, post) => async (dispatch) => {
    const newPost = { ...post };
    try {
        newPost.likeCount++;
        dispatch({ type: "LIKE", payload: newPost });
        await api.likePost(id);
    } catch (error) {
        dispatch({ type: "LIKE", payload: post });
        console.error(error);
    }
};*/