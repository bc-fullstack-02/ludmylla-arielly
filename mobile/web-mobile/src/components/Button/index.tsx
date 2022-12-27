import React, { ReactNode } from 'react';
import { TouchableOpacityProps, TouchableOpacity, Text} from 'react-native'

import { styles } from './style';

interface ButtonProps extends TouchableOpacityProps{
  title: string;
}

export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
       <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  )
}