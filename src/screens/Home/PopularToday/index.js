import {BoxViewWithTag, MatchupCard} from '@src/commons';
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {MockData} from '@src/constants';
import {ScrollView} from '@src/core-ui';

export const PopularToday = () => {
  return (
    <View style={styles().container}>
      <BoxViewWithTag label={'Popular Today'}>
        <ScrollView horizontal>
          {MockData.matchup.map((item, index) => {
            return (
              <View key={index.toString()}>
                <MatchupCard item={item} />
              </View>
            );
          })}
        </ScrollView>
      </BoxViewWithTag>
    </View>
  );
};
