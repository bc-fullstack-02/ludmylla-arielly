import { View, TextInput, TextInputProps } from 'react-native'
import React, { ReactNode } from 'react'

import { styles } from './styles';

interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

interface TextInputInputProps extends TextInputProps { }

function TextInputInput(props: TextInputInputProps) {
    return <TextInput style={styles.input} {...props}></TextInput>
}

interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
    return (
      <>
      {children}
      </>
    )
}

export const Input = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}