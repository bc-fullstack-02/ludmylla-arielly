import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Auth, AuthForm } from '../../components/AuthForm';

import api from '../../services/api';

import { styles } from './style';

interface SignUpProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export function SignUp({ navigation }: SignUpProps) {

  function handleLoginClick() {
    navigation.navigate('Login');
  }

  async function handleSignUp(auth: Auth) {

    try {
      const response = await api.post('/security/register', auth);
      navigation.navigate('Login');
      console.log(response)
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <>
      <AuthForm 
        formTitle='Faça o cadastro e começe a usar!' 
        submitFormButtonText='Cadastrar'
        submitFormButtonAction={handleSignUp} />
        <TouchableOpacity onPress={handleLoginClick}>
          <Text style={styles.link}>Já possui conta? Entre agora!</Text>
        </TouchableOpacity>
    </>
  )
}