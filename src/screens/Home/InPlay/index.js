import {BoxViewWithTag} from '@src/commons';
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {MockData, SVG} from '@src/constants';
import {FlatList} from '@src/core-ui';
import {commonStyle} from '@src/styles';
import {InPlayItem} from './InPlayItem';

export const InPlay = () => {
  return (
    <View style={styles({}).container}>
      <BoxViewWithTag
        label={'Inplay'}
        rightView={
          <View style={commonStyle({}).flexRow}>
            <SVG.BALL_1 style={styles({}).ballIcon} />
            <SVG.BALL_2 style={styles({}).ballIcon} />
            <SVG.BALL_3 style={styles({}).ballIcon} />
          </View>
        }>
        <FlatList
          data={MockData.inplay}
          renderItem={({item, index}) => {
            return (
              <View key={index.toString()}>
                <InPlayItem item={item} />
              </View>
            );
          }}
        />
      </BoxViewWithTag>
    </View>
  );
};
