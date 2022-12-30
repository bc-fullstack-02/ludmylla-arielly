import { UserCircle } from "phosphor-react-native"
import { useContext, useState } from "react";
import { Text, View } from "react-native"

import Button from "../../components/Button";
import { Input } from "../../components/Input";
import Space from "../../components/Space";

import { Context as AuthContext } from "../../content/AuthContent";
import { Context as PostContext } from "../../content/PostContent";

import { THEME } from "../../Theme";

import { styles } from './style';


export function CreatePost() {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const { user } = useContext(AuthContext);
    const {createPost} = useContext(PostContext);
    
    return(
        <View>
            <View style={styles.heading}>
                <UserCircle color='white' size={48} weight='thin'/>
                <Text style={styles.userNametext}>{user}</Text>
            </View>
            <Space>
                <Input.Root>
                    <Input.Input
                    value={title}
                    onChangeText={setTitle}
                    placeholder='Qual o título do post?'
                    placeholderTextColor={THEME.COLORS.INPUT}
                    autoCorrect
                    >
                    </Input.Input>
                </Input.Root>
            </Space>
            <Space>
                <Input.Root>
                    <Input.Input
                    value={description}
                    onChangeText={setDescription}
                    placeholder='Diga o que está pensando...'
                    placeholderTextColor={THEME.COLORS.INPUT}
                    autoCorrect
                    >
                    </Input.Input>
                </Input.Root>
            </Space>
            <Space>
                <Button
                    title='Postar'
                    onPress={()=>{
                        createPost && createPost({title,description})
                    }}
                />
            </Space>
        </View>
    )
}