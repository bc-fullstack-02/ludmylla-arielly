import React from 'react';
import { Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FocusAwareStatusBar } from '../../components/FocusAwareStatusBar';

import { THEME } from '../../Theme';
import { styles } from './style';

export function Friends() {

  return (
    <SafeAreaView style={styles.container}>
       <FocusAwareStatusBar
           barStyle='light-content'
           backgroundColor={THEME.COLORS.BACKGROUND_800}
        />
      <Text>Friends</Text>
    </SafeAreaView>
  )
}