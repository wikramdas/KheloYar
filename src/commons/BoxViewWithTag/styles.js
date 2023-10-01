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
    tagContainer: {
      backgroundColor: theme?.primaryColor,
      padding: 10,
      borderBottomRightRadius: 20,
      minWidth: 120,
      marginBottom: 10,
    },
    tagLabel: {
      color: '#fff',
      fontSize: 12,
    },
  });
