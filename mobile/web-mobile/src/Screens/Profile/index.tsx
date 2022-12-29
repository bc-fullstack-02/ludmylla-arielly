import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Auth, AuthForm } from '../../components/AuthForm';

import api from '../../services/api';

import { styles } from './style';

export function Profile() {

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  )
}