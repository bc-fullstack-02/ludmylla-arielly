import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '100%',
        minWidth: 240,
        borderRadius: 10,
        backgroundColor: THEME.COLORS.BACKGROUND_600,
        padding: 8,
    },
    input: {
        marginStart: 8,
        color: THEME.COLORS.INPUT,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
    },
});