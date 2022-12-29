import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 12,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
    userNameText: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT,
        marginStart: 12,
        textTransform: 'capitalize',
    }
});