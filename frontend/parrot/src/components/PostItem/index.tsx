import { Chat, Heart, UserCircle } from "phosphor-react";
import { Post } from "../../model/post";

import Heading from "../Heading";
import Text from "../Text";

interface PostItemProps {
    post: Post;
    handleLike: (postId: string) => void;
}

function PostItem({post, handleLike}:PostItemProps) {
    return (
        <div className="border-b border-slate-400 ml-5" key={post._id}>
        <div className="flex flex-row items-center my-4">
            <UserCircle size={48} weight="light" className="text-slate-50 hover:text-sky-200" />
            <Text className="font-extrabold ml-2">{post.profile.name}</Text>
        </div>

        <div className="ml-16 flex flex-col gap-2">
            <Heading size='sm'>{post.title}</Heading>
             {post.image ? (
                <img className="max-w-lg rounded-lg" src={post.description} alt="Foto" />
            ) : (
                <Text asChild><p>{post.description}</p></Text>
            )}
            
        </div>

        <div className="flex items-center ml-16 my-4 space-x-2">
            <div className="hover:bg-sky-400">
                <Chat size={24} className="text-slate-50" />
            </div>
            <Text size="sm">{post.comments.length}</Text>
            
            <div className="hover:bg-red-400 rounded-full p-1" onClick={() => handleLike(post._id)}>
                <Heart size={24} className="text-slate-50" />
            </div>
            <Text size="sm">{post.likes.length}</Text>
        </div>
    </div>
    )
}

export default PostItem;