import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MockData} from '@src/constants';
import {Games} from '../Games';

export const FeaturedGames = () => {
  const gameData = [...MockData.games];
  return (
    <View style={styles({}).container}>
      <Games
        data={[
          {games: MockData.games},
          {games: gameData.reverse()},
          {games: MockData.games},
        ]}
        heading={'FEATURED GAMES'}
        subHeading={'PLAY OUR'}
      />
    </View>
  );
};

const styles = theme =>
  StyleSheet.create({
    container: {flex: 1},
  });
