import {StyleSheet} from 'react-native';

export const commonStyle = theme =>
  StyleSheet.create({
    flex_1: {flex: 1},
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    boxShadow: {
      shadowColor: '#000',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.3,
      shadowRadius: 2,
      borderRadius: 8,
      backgroundColor: theme?.background,
      padding: 5,
      marginVertical: 5,
    },
    bottomShadow: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    lineSeparator: {
      borderBottomColor: theme?.borderColor,
      borderBottomWidth: 0.2,
      marginVertical: 5,
    },
  });
