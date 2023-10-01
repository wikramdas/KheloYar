import {StyleSheet} from 'react-native';
import {commonStyle} from '@src/styles';
export const styles = theme =>
  StyleSheet.create({
    container: {flex: 1},
    image: {
      ...commonStyle(theme).boxShadow,
      height: 240,
      width: 160,
      padding: 0,
      margin: 5,
    },
  });
