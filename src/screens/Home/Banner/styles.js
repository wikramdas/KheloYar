import {StyleSheet} from 'react-native';

export const styles = ({theme, reverse}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: reverse ? 'row-reverse' : 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 20,
    },
    leftContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoText: {
      color: theme?.tertiaryColor,
      letterSpacing: 2,
      fontSize: 9,
      fontWeight: '500',
    },
    headingContainer: {alignItems: 'center', marginVertical: 5},
    subHeading: {bottom: 5, letterSpacing: 2, fontSize: 9, fontWeight: '500'},
    button: {width: 150, marginTop: 3},
  });
