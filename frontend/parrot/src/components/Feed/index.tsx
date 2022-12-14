import { UserCircle } from "phosphor-react";

import Heading from "../Heading";
import Text from "../Text";
import PostItem from '../PostItem';

import { Post } from "../../model/post";

interface FeedProps {
    posts: Post[];
    handleLike: (postId: string) => void;
}

function Feed({posts, handleLike}: FeedProps) {
    const user = localStorage.getItem('user')
   
    return (
        <div className="basis-5/6 overflow-y-auto scroll-smooth">
            <Heading className="border-b border-slate-400 mt-4">
                <Text size="lg" className="font-extrabold ml-5">Página Inicial</Text>
                <div className="flex flex-row items-center ml-5 my-4">
                    <UserCircle size={48} weight="light" className="text-slate-50 hover:text-sky-200" />
                    <Text className="font-extrabold ml-2 capitalize">{user}</Text>
                </div>
            </Heading>
            <section>
                {posts && posts.map((post => (
                    <PostItem post={post} handleLike={handleLike} />
                )))}
            </section>
        </div>
    )
}

export default Feed;