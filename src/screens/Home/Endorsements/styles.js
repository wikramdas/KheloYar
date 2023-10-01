import {StyleSheet} from 'react-native';
import {commonStyle} from '@src/styles';
export const styles = theme =>
  StyleSheet.create({
    container: {flex: 1},
    itemOuterContainer: {alignItems: 'center'},
    itemContainer: {
      ...commonStyle(theme).boxShadow,
      margin: 5,
      alignItems: 'center',
      height: 240,
      width: 160,
      marginTop: 10,
    },
    image: {
      height: 250,
      width: 160,
      bottom: 15,
    },
    name: {fontSize: 20},
  });
