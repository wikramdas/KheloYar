import {StyleSheet} from 'react-native';
import {commonStyle} from '@src/styles';
export const styles = ({theme}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 5,
      alignItems: 'center',
      width: 130,
    },
    live: {
      position: 'absolute',
      top: 5,
      right: 5,
      padding: 5,
      borderRadius: 5,
      zIndex: 999,
      height: 20,
      width: 52,
    },
    flagContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingVertical: 25,
      ...commonStyle(theme).boxShadow,
    },
    flag: {
      width: 45,
      height: 45,
      resizeMode: 'contain',
    },
    teamNameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 10,
    },
    teamNameText: {textAlign: 'center'},
    vsText: {
      marginHorizontal: 2,
      bottom: 2,
    },
    time: {
      fontSize: 10,
    },
  });
