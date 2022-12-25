import React from 'react';
import { View, Image } from 'react-native';
import { User } from 'phosphor-react-native';

import Heading from '../../components/Heading';
import { Input } from '../../components/Input';

import { styles } from './styles';

import logo from '../../../assets/logo-mobile.png';
import { THEME } from '../../Theme';

export function Login() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={logo} resizeMethod='scale' />
     <Heading title='Sysmap Penguin' subtitle='Faça login e começe a usar!' />
      <Input.Root>
        <Input.Icon> 
          <User color={THEME.COLORS.INPUT} />
        </Input.Icon>
        <Input.Input></Input.Input>
      </Input.Root>
    </View>
  )
}