import {StyleSheet} from 'react-native';
import {commonStyle} from '@src/styles';
export const styles = theme =>
  StyleSheet.create({
    container: {flex: 1},
    boxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    box: {
      ...commonStyle(theme).boxShadow,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      margin: 5,
      borderRadius: 5,
      flex: 1,
      padding: 15,
    },
    socialIconContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
    },
    socialIcon: {
      height: 35,
      width: 35,
    },
  });
