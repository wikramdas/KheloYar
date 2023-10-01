import {mediumTextFont} from '@src/utils/fonts';
import {StyleSheet} from 'react-native';

export const styles = ({disabled, style, theme} = {}) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    innerContainer: {
      alignItems: 'center',
      borderRadius: 5,
      justifyContent: 'center',
      backgroundColor: disabled ? theme?.disableBtnBGColor : theme?.btnBGColor,
      padding: 10,
      ...(style && style),
    },
    loaderContainer: {
      flex: 1,
    },
    btnLabelContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    text: {
      ...mediumTextFont,
      fontSize: 18,
      color: theme?.btnTextColor,
      textAlign: 'center',
      ...(style && style),
    },
  });
