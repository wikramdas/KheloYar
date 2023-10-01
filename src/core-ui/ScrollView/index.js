import React from 'react';
import {ScrollView as RNScrollView} from 'react-native';
export const ScrollView = ({children, style, containerStyle, ...props}) => {
  return (
    <RNScrollView
      contentContainerStyle={containerStyle}
      style={style}
      keyboardShouldPersistTaps={'always'}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      {...props}>
      {children}
    </RNScrollView>
  );
};
