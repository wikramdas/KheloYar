import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MockData} from '@src/constants';
import {Games} from '../Games';

export const CasinoGames = () => {
  return (
    <View style={styles({}).container}>
      <Games
        data={[{games: MockData.games}]}
        heading={'CASINO GAMES'}
        subHeading={'WHAT WE HAVE IN'}
      />
    </View>
  );
};

const styles = theme =>
  StyleSheet.create({
    container: {flex: 1},
  });
