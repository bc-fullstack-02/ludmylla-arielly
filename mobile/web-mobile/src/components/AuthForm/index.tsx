import { Lock, User } from 'phosphor-react-native';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, Text } from 'react-native'

import Heading from '../Heading';
import { Input } from '../Input';
import Space from '../Space';
import Button from '../Button';

import logo from '../../../assets/logo-mobile.png';

import { Auth } from '../../@types/auth';

import { THEME } from '../../Theme'
import { styles } from './style';
interface AuthFormProps {
    formTitle: string;
    submitFormButtonText: string;
    submitFormButtonAction: (auth: Auth) => void;
    showNameInput?: boolean;
}

export function AuthForm({
    formTitle,
    submitFormButtonText,
    submitFormButtonAction,
}: AuthFormProps) {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <Image source={logo} style={logo} resizeMethod='scale' />
            <Heading title='Sysmap Penguin' subtitle={formTitle} />
            <Input.Root>
                <Input.Icon>
                    <User color={THEME.COLORS.INPUT} />
                </Input.Icon>
                <Input.Input
                    value={user}
                    onChangeText={setUser}
                    placeholder='Digite seu usuário'
                    placeholderTextColor={THEME.COLORS.INPUT}
                    autoCapitalize='none'
                    autoCorrect
                />
            </Input.Root>
            <Space />
            <Input.Root>
                <Input.Icon>
                    <Lock color={THEME.COLORS.INPUT} />
                </Input.Icon>
                <Input.Input
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Digite sua senha'
                    placeholderTextColor={THEME.COLORS.INPUT}
                    autoCapitalize='none'
                    autoCorrect secureTextEntry />
            </Input.Root>
            <Space />
            <Button onPress={() => submitFormButtonAction({user, password})} title={submitFormButtonText} />
            <Space />
        </KeyboardAvoidingView>
    )
}