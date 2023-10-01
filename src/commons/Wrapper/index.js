import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';
export const Wrapper = ({noSafeArea, style, children}) => {
  const theme = useSelector(store => store?.theme);
  return (
    <>
      {noSafeArea ? (
        <View style={styles(theme, style).container}>
          <StatusBar backgroundColor={'transparent'} translucent={true} />
          {children}
        </View>
      ) : (
        <SafeAreaView style={styles(theme).safeAreaContainer}>
          <StatusBar backgroundColor={'transparent'} translucent={true} />
          <View>{children}</View>
        </SafeAreaView>
      )}
    </>
  );
};
