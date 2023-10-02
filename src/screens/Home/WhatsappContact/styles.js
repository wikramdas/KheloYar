import {StyleSheet} from 'react-native';
export const styles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    whatsappIcon: {left: 15, zIndex: 999},
    buttonContainer: {
      backgroundColor: theme?.secondaryColor,
      width: '50%',
      padding: 8,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    buttonInnerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '90%',
      left: 15,
    },
    text: {color: '#fff', flex: 1, fontSize: 11},
  });
