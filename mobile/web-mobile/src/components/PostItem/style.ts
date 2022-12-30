import { StyleSheet } from "react-native";
import { THEME } from "../../Theme";

export const styles = StyleSheet.create({
    container: {},
    post: {
        borderBottomColor: THEME.COLORS.BORDER,
        borderBottomWidth: 1,  
        paddingBottom: 12,
     },
     postHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
     },
     postUserText: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT,
        marginStart: 12,
     },
     contentBody: {
        paddingHorizontal: 24,
  
     },
     contentText: {
        color: THEME.COLORS.TEXT,
        marginBottom: 12,
     },
     titleText: {
      color: THEME.COLORS.TEXT,
      marginBottom: 12,
      fontFamily:THEME.FONT_FAMILY.BOLD,
     },
     footer: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        alignItems: 'center',
     },
     number: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.SM,
        marginStart: 5,
        marginEnd: 24,
     },
     image:{
      resizeMode: 'contain',
      height: 240,
      borderRadius: 12
  }
     
});