import {Text, Wrapper} from '@commons';
import {ROUTES} from '@src/constants';
import utils from '@src/utils/utils';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
export const Splash = props => {
  const {navigation} = props;

  useEffect(() => {
    startAfterDelay(500, ROUTES.HOME);
  });

  const startAfterDelay = (delay, routeName) => {
    setTimeout(() => {
      utils.resetAndGo(navigation, routeName);
    }, delay);
    clearTimeout();
  };

  return (
    <Wrapper noSafeArea={true}>
      <View style={styles.container}>
        <Text>Splash Screen</Text>
      </View>
    </Wrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
