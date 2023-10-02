import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Image} from '@commons/Image';
import {IMG} from '@src/constants';
export const BackgroundVector = ({}) => {
  const theme = useSelector(store => store?.theme);
  return (
    <View style={styles(theme).container}>
      <Image
        source={IMG.VECTOR_LEFT}
        style={[styles(theme).commonVectorStyle, styles(theme).leftVector]}
      />
      <Image
        source={IMG.VECTOR_RIGHT}
        style={[styles(theme).commonVectorStyle, styles(theme).rightVector]}
      />
    </View>
  );
};

const styles = (theme, style) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    commonVectorStyle: {
      height: 300,
      width: 290,
      position: 'absolute',
    },
    leftVector: {
      left: -10,
    },
    rightVector: {
      right: -10,
    },
  });
