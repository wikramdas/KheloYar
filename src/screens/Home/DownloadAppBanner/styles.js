import {StyleSheet} from 'react-native';
import {commonStyle} from '@src/styles';
export const styles = ({theme}) =>
  StyleSheet.create({
    container: {flex: 1},
    shadow: {
      ...commonStyle(theme).boxShadow,
    },
    gradientContainer: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      height: 90,
    },
    downloadTextContainer: {width: '50%'},
    downloadText: {color: '#fff'},
    addImage: {
      height: 100,
      width: '100%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      position: 'absolute',
      bottom: 0,
      left: 80,
    },

    header: {flex: 1, marginBottom: 5},
    shadowImage: {
      height: '100%',
      width: '100%',
    },
    headingContainer: {position: 'absolute', bottom: -15},
    title: {color: '#fff', marginLeft: 10},
    headingBig: {fontSize: 60, bottom: 10},
  });
