import React from "react";
import { Image, Text, View } from "react-native";
import { Chat, Heart, UserCircle } from "phosphor-react-native";

import { Post } from "../../@types/post";

import { styles } from "./style";

interface PostItemProps {
    post: Post,
}
export function PostItem({ post }: PostItemProps) {
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
                <Text style={styles.number}>{post.likes.length}</Text>
                <Heart size={24} color='white' weight='thin' />
                <Text style={styles.number}>{post.comments.length}</Text>
            </View>
        </View>

    )
}