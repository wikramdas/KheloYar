import {StyleSheet} from 'react-native';
export const styles = ({style, theme} = {}) =>
  StyleSheet.create({
    linearGradient: {
      padding: 10,
      // alignSelf: 'baseline',
      ...style,
    },
    buttonText: {
      textAlign: 'center',
      color: theme?.btnTextColor,
    },
  });
