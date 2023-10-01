import React from 'react';
import {Image as RNImage} from 'react-native';
export const Image = ({source, style, resizeMode}) => {
  return (
    <RNImage resizeMode={resizeMode || 'cover'} source={source} style={style} />
  );
};
