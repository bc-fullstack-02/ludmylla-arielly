import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 12,
   },
   heading: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingBottom: 12,
      borderBottomColor: THEME.COLORS.BORDER,
      borderBottomWidth: 1,
      fontFamily: THEME.FONT_FAMILY.BOLD,
      fontSize: THEME.FONT_SIZE.MD,
   },
   userNameText: {
      fontFamily: THEME.FONT_FAMILY.BOLD,
      fontSize: THEME.FONT_SIZE.MD,
      color: THEME.COLORS.TEXT,
      marginStart: 12,
      textTransform: 'capitalize',
   },
   content: {
      flex: 1
   },
});