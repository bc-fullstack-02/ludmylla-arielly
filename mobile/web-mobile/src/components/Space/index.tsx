import { ReactNode } from 'react';
import { View } from 'react-native'

import { styles } from './style';

interface SpaceProps {
    children?: ReactNode
}

export default function Space(props: SpaceProps) {
  return (
    <View style={styles.container}>
        {props?.children}
    </View>
  )
}