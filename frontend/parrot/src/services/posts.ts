import { Post } from "../model/post";
import api from "./api";
import { getAuthHeader } from "./auth";

async function callLikePost(post: Post, profile: never) {
    try {
        await api.post(`/posts/${post._id}/like`, null, getAuthHeader());
        like(post, profile)
    } catch (err) {
        console.error(err);
    }
}

async function callUnlikePost(post: Post, profile: never) {
    try {
        await api.post(`/posts/${post._id}/unlike`, null, getAuthHeader());
        unlike(post, profile)
    } catch (err) {
        console.error(err);
    }
}

function like(post: Post, profile: never) {
    post.likes.push(profile);
    return post;
}

function unlike(post: Post, profile: never) {
    const index = post.likes.indexOf(profile);
    post.likes.splice(index, 1);
    return post;
}

export {
    callLikePost,
    callUnlikePost
}