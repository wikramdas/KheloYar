import {TextButton} from '@src/commons';
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {MockData} from '@src/constants';
import {useSelector} from 'react-redux';
import utils from '@src/utils/utils';

export const Pages = () => {
  const theme = useSelector(store => store?.theme);
  return (
    <View style={styles(theme).container}>
      {MockData.pages.map((item, index) => {
        return (
          <View key={index.toString()} style={styles().itemContainer}>
            <TextButton onPress={() => utils.alert(item?.label)}>
              {item?.label}
            </TextButton>
          </View>
        );
      })}
    </View>
  );
};
