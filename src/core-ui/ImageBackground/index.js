// import {IMG} from '@src/constants';
import React from 'react';
import {ImageBackground as RNImageBackground} from 'react-native';

export const ImageBackground = ({
  children,
  style,
  imageStyle,
  source,
  resizeMode,
  ...props
}) => {
  return (
    <RNImageBackground
      style={style}
      resizeMode={resizeMode || 'contain'}
      imageStyle={imageStyle}
      source={source?.uri === '' ? '' : source}
      {...props}>
      {children}
    </RNImageBackground>
  );
};
