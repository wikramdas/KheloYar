import {StyleSheet} from 'react-native';

export const styles = ({theme, style, header} = {}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: header === true ? 35 : 50,
      height: header === true ? 35 : 50,
      marginRight: 5,
      borderRadius: 7,
      ...style,
    },
    heading: {fontSize: 17, ...style},
    subHeading: {fontSize: 13, ...style},
    buttonContainer: {
      alignItems: 'flex-end',
      width: '35%',
    },
  });
