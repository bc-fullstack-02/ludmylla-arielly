import React, { useContext } from 'react';
import { UserCircle } from 'phosphor-react-native';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../../components/Button';
import { FocusAwareStatusBar } from '../../components/FocusAwareStatusBar';

import { Context as AuthContext } from '../../content/AuthContent';

import { THEME } from '../../Theme';
import { styles } from './style';

export function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar
           barStyle='light-content'
           backgroundColor={THEME.COLORS.BACKGROUND_800}
        />
       <View style={styles.heading}>
        <UserCircle color='white' size={48} weight='thin' />
        <Text style={styles.userNameText}>{user}</Text>
      </View>
      <Button onPress={logout} title='Sair' />
    </SafeAreaView>
  )
}