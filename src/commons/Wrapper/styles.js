import {StyleSheet} from 'react-native';

export const styles = (theme, style) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme?.background,
      ...style,
    },
    safeAreaContainer: {
      flex: 1,
      backgroundColor: theme?.background,
      paddingTop: 20,
    },
  });
