import React from 'react';
import {boldTextFont} from '@src/utils/fonts';
import {Text as RNText, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
export const Heading = ({children, style}) => {
  const theme = useSelector(store => store?.theme);
  return <RNText style={styles(theme, style).textStyle}>{children}</RNText>;
};

const styles = (theme, style) =>
  StyleSheet.create({
    textStyle: {
      fontSize: 25,
      color: theme?.text,
      ...boldTextFont,
      ...style,
    },
  });
