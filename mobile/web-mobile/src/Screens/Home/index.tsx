import React, { useContext, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { UserCircle, PencilSimple } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Context as AuthContext } from '../../content/AuthContent';
import { Context as PostContext } from '../../content/PostContent';

import { FocusAwareStatusBar } from '../../components/FocusAwareStatusBar';
import { PostItem } from '../../components/PostItem';

import { THEME } from '../../Theme';
import { styles } from './style';

interface HomeProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export function Home({navigation}: HomeProps) {
  const { user } = useContext(AuthContext);
  const { getPosts, posts } = useContext(PostContext);

  useEffect(() => {
    getPosts && getPosts();
  }, []);

  function handlePencilPress() {
    navigation.navigate('CreatePost');
  }

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar
        barStyle='light-content'
        backgroundColor={THEME.COLORS.BACKGROUND_800} 
      />
      <View style={styles.heading}>
        <UserCircle color='white' size={48} weight='thin' />
        <Text style={styles.userNameText}>{user}</Text>
        <View style={{ flex: 1}}></View>
        <TouchableOpacity onPress={handlePencilPress}>
          <PencilSimple color='white' size={38} weight='thin' />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <FlatList
          data={posts}
          keyExtractor={({_id}) => _id} 
          renderItem={({item}) => <PostItem post={item}/>}
        />
       
      </View>
    </SafeAreaView>
  )
}