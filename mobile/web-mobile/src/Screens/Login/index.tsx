import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Context as AuthContext } from '../../content/AuthContent';
import { AuthForm } from '../../components/AuthForm';

import { styles } from './style';
import Space from '../../components/Space';
interface LoginProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export function Login({ navigation }: LoginProps) {

  const { login, errorMessage } = useContext(AuthContext);

  function handleSignUpClick() {
    navigation.navigate('SignUp')
  }

  return (
    <>
    <AuthForm 
      formTitle='Faça o login e começe a usar!' 
      submitFormButtonText='Entrar'
      submitFormButtonAction={login}/>

      <TouchableOpacity onPress={handleSignUpClick}>
        <Text style={styles.link}>Não porssui conta? Crie uma agora!</Text>
      </TouchableOpacity>
      {errorMessage && (
        <Space>
          <Text  style={styles.errorMessage}>{errorMessage}</Text>
        </Space>
      )}
    </>
  )
}