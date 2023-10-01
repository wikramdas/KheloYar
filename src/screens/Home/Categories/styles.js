import {StyleSheet} from 'react-native';

export const styles = theme =>
  StyleSheet.create({
    container: {
      paddingVertical: 10,
      alignItems: 'center',
    },
    itemContainer: {
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconImage: {
      width: 40,
      height: 40,
      tintColor: theme?.primaryColor,
    },
    title: {
      fontSize: 14,
      paddingTop: 5,
    },
    chevronContainer: {
      position: 'absolute',
      right: -8,
      top: 30,
    },
    chevronButton: {paddingVertical: 10},
    chevronIcon: {left: -3},
  });
