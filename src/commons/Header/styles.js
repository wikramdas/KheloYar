import {StyleSheet} from 'react-native';
import {commonStyle} from '@src/styles';

export const styles = ({disabled, style, theme} = {}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme?.headerBGColor,
      paddingHorizontal: 10,
      height: 45,
      ...commonStyle(theme).bottomShadow,
      ...(style && style),
    },
    leftIconContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    leftIconInnerContainer: {
      paddingRight: 10,
      paddingTop: 5,
      ...(style && style),
    },
    rightIconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    walletContainer: {
      backgroundColor: theme?.primaryColor,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      width: 110,
    },
    walletCash: {flex: 1, alignItems: 'center'},
    walletCashText: {color: '#fff', fontWeight: '500', fontSize: 13},
    walletCashBonus: {color: '#fff', fontSize: 8},
    plusButton: {
      height: 30,
      width: 30,
      borderRadius: 0,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
    userImageContainer: {marginLeft: 10},
    userImage: {height: 40, width: 40, borderRadius: 5},
  });
