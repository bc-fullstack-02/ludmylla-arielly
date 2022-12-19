import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 48,
    },
    logo: {
        width: 200,
        height: 200
    },
    text: {
        color: THEME.COLORS.TEXT,
    }
});