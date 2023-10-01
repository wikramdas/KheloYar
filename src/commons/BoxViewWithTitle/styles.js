import {StyleSheet} from 'react-native';
import {commonStyle} from '@src/styles';
export const styles = ({style, theme} = {}) =>
  StyleSheet.create({
    container: {
      ...commonStyle(theme).boxShadow,
      ...style,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headingContainer: {
      padding: 5,
    },
    heading: {
      fontSize: 24,
    },
  });
