import React from 'react';
import {mediumTextFont} from '@src/utils/fonts';
import {Text as RNText, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
export const SubHeading = ({children, style}) => {
  const theme = useSelector(store => store?.theme);
  return <RNText style={styles(theme, style).textStyle}>{children}</RNText>;
};

const styles = (theme, style) =>
  StyleSheet.create({
    textStyle: {
      fontSize: 16,
      color: theme?.text,
      fontWeight: '700',
      ...mediumTextFont,
      ...style,
    },
  });
