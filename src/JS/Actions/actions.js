import { ADD_ARTICLE } from "../Constants/actions-types";

export const addPost = newPost => {
    return {
        type: ADD_ARTICLE,
        payload: newPost
    }
}