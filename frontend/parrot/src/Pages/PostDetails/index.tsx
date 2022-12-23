import { UserCircle } from "phosphor-react";
import { useState, useEffect, FormEvent } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";

import Menu from "../../components/Menu";
import PostItem from "../../components/PostItem";
import Text from "../../components/Text";
import { TextInput } from "../../components/TextInput";

import { Post } from "../../model/post";
import api from "../../services/api";
import { getAuthHeader } from "../../services/auth";
import { callLikePost, callUnlikePost } from "../../services/posts";


interface CommentsFormElements extends HTMLFormControlsCollection {
    description:HTMLInputElement;
}

interface CommentsFormElement extends HTMLFormElement {
    readonly elements: CommentsFormElements;
}

function PostDetails() {
    const profile = localStorage.getItem('profile') as never;
    const user = localStorage.getItem('user');
    const { postId } = useParams();
    const [postDetails, setPostDetails] = useState<Post>();
    const [comments, setComments] = useState([]);
    //00:50:43 19/12/22

    useEffect(() => {
        async function fetchPostDetails() {
            getPost()
            getComments()
        }

        fetchPostDetails();
    }, [])

   async function getPost() {
        const response = await api.get(`/posts/${postId}`, getAuthHeader());
        setPostDetails(response.data)
        console.log(`Postagens - ${response.data}`)
    }
    async function getComments() {
        const response = await api.get(`/posts/${postId}/comments`, getAuthHeader());
        setComments(response.data)
        console.log(`Comentarios - ${response.data}`)
    }

    async function handleLike(postId: string) {
        try {
            if (postDetails?.likes.includes(profile)) {
                const newPost = await callUnlikePost(postDetails, profile);
                newPost && setPostDetails({ ...newPost})
            } else {
                const newPost = postDetails && (await callLikePost(postDetails, profile));
                newPost && setPostDetails({ ...newPost})
            }
        } catch (err) {
            console.error(err);
        }
    }

    async function handleSubmit(event:FormEvent<CommentsFormElement>) {
        
        event.preventDefault();
        const form = event.currentTarget;

        const data = {
            description: form.elements.description?.value,
        }

        try {
            const response = await api.post(`/posts/${postId}/comments`, data, getAuthHeader())
            const comment = {
                ...response.data,
                profile: { _id: profile, name: user },
            }
            setComments([comment, ...comments])
            setPostDetails((post) => {
                post?.comments.push(comment)
                return { ...post }
            })

        }catch(err) {
            console.error(err)
        }
    }

    return (
        <div className="w-screen h-screen flex">
            <Menu />
            <div className="flex flex-col w-full overflow-y-auto scroll-smooth">
                {postDetails && <PostItem post={postDetails} handleLike={handleLike} />}
                <section>
                    <form onSubmit={handleSubmit} className='mx-8 my-8 flex flex-col gap-4'>
                        <Text>Insira seu comentário</Text>
                        <TextInput.Root>
                            <TextInput.Input
                                id='description'
                                placeholder='Comente ...'
                            />
                        </TextInput.Root>
                        <Button type="submit" className="mt-4 text-white bg-gray-400 items-start max-w-sm pt-2 pb-2 rounded-md text-center ">
                            Incluir comentário
                        </Button>
                    </form>
                    <div className="w-full">
                        <div className="mx-8 my-8">
                            <Text size="lg">Comentários:</Text>
                            <ul>
                                {comments && comments.map((comment) => (
                                    <li className="p-4 my-8 border rounded-lg" key={comment._id}>
                                        <div className="flex flex-row items-center mb-2">
                                            <UserCircle size={32} weight='light' className="text-slate-50" />
                                            <Text size="sm" className="capitalize ml-2">{comment.profile.name}</Text>
                                        </div>
                                        <Text size="md">{comment.description}</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PostDetails;