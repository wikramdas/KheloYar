import React from 'react';
import {textFont} from '@src/utils/fonts';
import {Text as RNText, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
export const Text = ({children, style}) => {
  const theme = useSelector(store => store?.theme);
  return <RNText style={styles(theme, style).textStyle}>{children}</RNText>;
};

const styles = (theme, style) =>
  StyleSheet.create({
    textStyle: {
      fontSize: 12,
      color: theme?.text,
      ...textFont,
      ...style,
    },
  });
