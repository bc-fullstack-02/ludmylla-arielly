import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { UserCircle, Chat, Heart } from 'phosphor-react-native';

import { Context as AuthContext } from '../../content/AuthContent';

import { styles } from './style';

export function Home() {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <UserCircle color='white' size={48} weight='thin' />
        <Text style={styles.userNameText}>{user}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.post}>
          <View style={styles.postHeading}>
            <UserCircle color='white' size={48} weight='thin' />
            <Text style={styles.postUserText}>Fulano</Text>
          </View>
          <View style={styles.contentBody}>
            <Text style={styles.contentText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. 
            </Text>
          </View>
          <View style={styles.footer}>
            <Chat size={24} color='white' weight='thin'/>
            <Text style={styles.number}>9.999</Text>
            <Heart size={24} color='white' weight='thin'/>
            <Text style={styles.number}>9.999</Text>
          </View>
      </View>

      <View style={styles.post}>
          <View style={styles.postHeading}>
            <UserCircle color='white' size={48} weight='thin' />
            <Text style={styles.postUserText}>Fulano</Text>
          </View>
          <View style={styles.contentBody}>
            <Text style={styles.contentText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. 
            </Text>
          </View>
          <View style={styles.footer}>
            <Chat size={24} color='white' weight='thin'/>
            <Text style={styles.number}>9.999</Text>
            <Heart size={24} color='white' weight='thin'/>
            <Text style={styles.number}>9.999</Text>
          </View>
      </View>
      </View>
    </View>
  )
}