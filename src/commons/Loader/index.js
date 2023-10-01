import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
export const Loader = props => {
  const {color, size} = props;
  const theme = useSelector(store => store?.theme);
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={size === undefined ? 'large' : size}
        color={color === undefined ? theme.loaderColor : color}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
