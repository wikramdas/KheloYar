import {StyleSheet, Platform} from 'react-native';

export const commonStyle = theme =>
  StyleSheet.create({
    flex_1: {flex: 1},
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    boxShadow: {
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 0.3,
          shadowRadius: 2,
        },
        android: {elevation: 2},
      }),
      borderRadius: 8,
      backgroundColor: theme?.background,
      padding: 5,
      marginVertical: 5,
    },
    bottomShadow: {
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 2,
        },
        android: {
          elevation: 2, // Apply elevation only on Android
          // shadowColor: 'transparent', // Remove shadow on Android
          // shadowOffset: {width: 0, height: 0},
          // shadowOpacity: 0,
          // shadowRadius: 0,
          borderBottomWidth: 0.5,
          borderBottomColor: theme?.borderColor,
        },
      }),
    },
    lineSeparator: {
      marginVertical: 5,
      height: 1,
      backgroundColor: theme?.borderColor,
    },
  });
