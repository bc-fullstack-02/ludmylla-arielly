import { StyleSheet } from "react-native";
import { THEME } from "../../Theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 68,
    },
    logo: {
        width: 200,
        height: 200
    },
    text: {
        color: THEME.COLORS.TEXT,
    },
    link: {
        color: THEME.COLORS.CAPTION_400,
        fontSize: THEME.FONT_SIZE.SM,
        textAlign: 'center',
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        textDecorationLine: 'underline',
    }
});