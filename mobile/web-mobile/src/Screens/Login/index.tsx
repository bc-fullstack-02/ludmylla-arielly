import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Auth, AuthForm } from '../../components/AuthForm';

import api from '../../services/api';

import { styles } from './style';
interface LoginProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export function Login({ navigation }: LoginProps) {

  function handleSignUpClick() {
    navigation.navigate('SignUp')
  }

  async function handleLogin(auth: Auth) {

    try {
      const response = await api.post('/security/login', auth);
      console.log(response)
    } catch(err) {
      console.error(err)
    }
  
  }

  return (
    <>
    <AuthForm 
      formTitle='Faça o login e começe a usar!' 
      submitFormButtonText='Entrar'
      submitFormButtonAction={handleLogin}/>

      <TouchableOpacity onPress={handleSignUpClick}>
        <Text style={styles.link}>Não possui conta? Crie uma agora!</Text>
      </TouchableOpacity>
    </>
  )
}