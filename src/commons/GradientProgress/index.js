import {LinearGradient} from '@src/core-ui';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
export const GradientProgress = ({progress, style}) => {
  const theme = useSelector(store => store?.theme);
  return (
    <View style={styles({theme, style}).container}>
      <LinearGradient style={styles({progress}).progressGradient} angle={90} />
    </View>
  );
};
const styles = ({theme, progress, style}) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme?.primaryColor,
      width: '70%',
      borderRadius: 4,
      marginVertical: 3,
      ...style,
    },
    progressGradient: {
      padding: 3,
      borderRadius: 4,
      width: `${progress}%`,
    },
  });
