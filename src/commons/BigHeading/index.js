import React from 'react';
import {bebasNeueRegular} from '@src/utils/fonts';
import {Text as RNText, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
export const BigHeading = ({children, style}) => {
  const theme = useSelector(store => store?.theme);
  return <RNText style={styles(theme, style).textStyle}>{children}</RNText>;
};

const styles = (theme, style) =>
  StyleSheet.create({
    textStyle: {
      fontSize: 32,
      color: theme?.text,
      fontWeight: '400',
      ...bebasNeueRegular,
      ...style,
    },
  });
