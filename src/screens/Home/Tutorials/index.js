import {BoxViewWithTag, Image, PlayIcon} from '@src/commons';
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {IMG} from '@src/constants';
import {ScrollView} from '@src/core-ui';
import utils from '@src/utils/utils';

const tutorials = [
  {id: 1, image: IMG.TUTORIALS_1},
  {id: 2, image: IMG.TUTORIALS_2},
  {id: 3, image: IMG.TUTORIALS_1},
];
export const Tutorials = () => {
  return (
    <View style={styles().container}>
      <BoxViewWithTag label={'Tutorials'}>
        <ScrollView horizontal={true}>
          {tutorials.map((item, index) => {
            return (
              <View key={index.toString()}>
                <PlayIcon onPress={() => utils.alert('play')} />
                <Image
                  source={item?.image}
                  style={styles().image}
                  resizeMode={'contain'}
                />
              </View>
            );
          })}
        </ScrollView>
      </BoxViewWithTag>
    </View>
  );
};
