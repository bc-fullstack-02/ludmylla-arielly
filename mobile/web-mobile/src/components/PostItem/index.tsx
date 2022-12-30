import React, {useContext} from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Chat, Heart, UserCircle } from "phosphor-react-native";

import { Context as PostContext } from "../../content/PostContent";
import { Context as AuthContext } from "../../content/AuthContent";

import { Post } from "../../@types/post";

import { styles } from "./style";

interface PostItemProps {
    post: Post,
}
export function PostItem({ post }: PostItemProps) {
    const {likePost, unlike} = useContext(PostContext);
    const {profile} = useContext(AuthContext);

    function handleLikePress() {
        if (post.likes.includes(profile)) {
            unlike && unlike({postId: post._id})
        }else {
            likePost && likePost({postId: post._id})
        }
    }

    return (
        <View style={styles.post}>
            <View style={styles.postHeading}>
                <UserCircle color='white' size={48} weight='thin' />
                <Text style={styles.postUserText}>{post.profile.name}</Text>
            </View>
            <View style={styles.contentBody}>
                <Text style={styles.titleText}>{post.title}</Text>
            </View>
            {post.image ? <Image source={post.description} style={styles.image} />: (
                <View style={styles.contentBody}>
                    <Text style={styles.contentText}>{post.description}</Text>
                </View>
            )}
    
            <View style={styles.footer}>
                <Chat size={24} color='white' weight='thin' />
                <Text style={styles.number}>{post.comments.length}</Text>
                <TouchableOpacity onPress={handleLikePress}>
                   {post.likes.includes(profile) ? (
                     <Heart size={24} color='red' weight='fill' />
                   ) : (
                     <Heart size={24} color='white' weight='thin' />
                   )}
                </TouchableOpacity>
                <Text style={styles.number}>{post.likes.length}</Text>
            </View>
        </View>

    )
}