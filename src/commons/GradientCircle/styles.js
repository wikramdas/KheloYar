import {Platform, StyleSheet} from 'react-native';

export const styles = ({theme}) =>
  StyleSheet.create({
    container: {
      padding: 10,
      borderRadius: 1000,
      backgroundColor: theme?.circleLightColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    gradientCircle: {
      height: 130,
      width: 130,
      borderRadius: 1000,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      height: 130,
      width: 130,
      bottom: Platform.OS === 'android' ? 8 : 0,
    },
  });
