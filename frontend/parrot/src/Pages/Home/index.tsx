import { useEffect, useState } from 'react';

import Menu from '../../components/Menu';
import Feed from '../../components/Feed';

import { getAuthHeader } from '../../services/auth';
import api from '../../services/api';
import { Post } from '../../model/post';

function Home() {

    const authHeader = getAuthHeader()
    const profile = localStorage.getItem('profile') as never;
    const user = localStorage.getItem('user') as string;

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function getPosts() {
            const response = await api.get('/feed', authHeader);
            setPosts(response.data);
        }
        getPosts();
    }, []);

    async function likePost(postId: String) {
        try {
            await api.post(`/posts/${postId}/like`, null, authHeader);
            const newPost = posts.filter((post) => post._id === postId)
                .map((post) => {
                    post.likes.push(profile)
                    return post;
                });

            changePostItem(newPost[0])

        } catch (err) {
            console.error(err);
        }
    }

    async function unlikePost(postId: String) {
        try {
            await api.post(`/posts/${postId}/like`, null, authHeader);
            const newPost = posts.filter((post) => post._id === postId)
                .map((post) => {
                    const index = post.likes.indexOf(profile);
                    post.likes.splice(index, 1);
                    return post;
                });

            changePostItem(newPost[0])

        } catch (err) {
            console.error(err);
        }
    }

    function changePostItem(newPost: Post) {
        setPosts((posts) => {
            const post = newPost;
            const index = posts.indexOf(post)
            posts[index] = post
            return [...posts]
        })
    }

    async function handleLike(postId: String) {
        const likePosts = posts.filter(post => post._id === postId)
            .map(post => post.likes.includes(profile));

        if (likePosts && !likePosts[0]) {
            likePost(postId)
            console.log(likePost)
        } else {
            unlikePost(postId);
        }
    }

    async function newPostCreated(post: Post) {
        try {
            const response = await api.get(`/posts/${post._id}`, authHeader)
            const newPost = response.data;
            setPosts((posts) => [newPost, ...posts]);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="w-screen h-screen flex">
            <Menu newPostCreated={newPostCreated} />

            <Feed posts={posts} handleLike={handleLike} />

        </div>
    )
}

export default Home;