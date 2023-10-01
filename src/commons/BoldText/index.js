import React from 'react';
import {boldTextFont} from '@src/utils/fonts';
import {useSelector} from 'react-redux';
import {Text} from '@commons/Text';
import {StyleSheet} from 'react-native';
export const BoldText = ({children, style}) => {
  const theme = useSelector(store => store?.theme);
  return <Text style={styles(theme, style).textStyle}>{children}</Text>;
};

const styles = (theme, style) =>
  StyleSheet.create({
    textStyle: {
      fontSize: 13,
      color: theme?.text,
      ...boldTextFont,
      ...style,
    },
  });
