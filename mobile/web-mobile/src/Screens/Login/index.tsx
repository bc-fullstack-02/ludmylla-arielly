import { View, Image } from 'react-native'
import React from 'react'

import Heading from '../../components/Heading';

import{ styles } from './styles';

import logo from '../../../assets/images/logo-mobile.png';


export function Login() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={logo} resizeMethod='scale' />
     <Heading title='Sysmap Penguin' subtitle='Faça login e começe a usar!' />
    </View>
  )
}