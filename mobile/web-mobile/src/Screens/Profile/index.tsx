import React, { useContext } from 'react';
import { UserCircle } from 'phosphor-react-native';
import { Text, View } from 'react-native';

import Button from '../../components/Button';

import { Context as AuthContext } from '../../content/AuthContent';

import { styles } from './style';


export function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
       <View style={styles.heading}>
        <UserCircle color='white' size={48} weight='thin' />
        <Text style={styles.userNameText}>{user}</Text>
      </View>
      <Button onPress={logout} title='Sair' />
    </View>
  )
}