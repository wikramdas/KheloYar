import {StyleSheet} from 'react-native';
import {commonStyle} from '@src/styles';
export const styles = ({theme}) =>
  StyleSheet.create({
    container: {flex: 1},
    shadow: {
      ...commonStyle(theme).boxShadow,
    },
    header: {flex: 1, marginBottom: 5},
    coverImage: {
      height: 170,
      width: '100%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    shadowImage: {
      height: '100%',
      width: '100%',
    },
    headingContainer: {position: 'absolute', bottom: -15},
    title: {color: '#fff', marginLeft: 10},
    headingBig: {fontSize: 60, bottom: 10},
  });
