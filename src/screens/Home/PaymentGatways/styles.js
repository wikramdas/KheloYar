import {StyleSheet} from 'react-native';
export const styles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    itemContainer: {margin: 10},
  });
