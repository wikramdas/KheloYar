import React from 'react';
import {mediumTextFont} from '@src/utils/fonts';
import {Text as RNText, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
export const TextButton = ({children, style, onPress, textStyle}) => {
  const theme = useSelector(store => store?.theme);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress && onPress()}
      style={style}>
      <RNText style={styles(theme, textStyle).textStyle}>{children}</RNText>
    </TouchableOpacity>
  );
};

const styles = (theme, textStyle) =>
  StyleSheet.create({
    textStyle: {
      fontSize: 14,
      color: theme?.primaryColor,
      ...mediumTextFont,
      ...textStyle,
    },
  });
