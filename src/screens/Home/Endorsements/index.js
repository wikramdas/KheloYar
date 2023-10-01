import {BigHeading, BoxViewWithTag, Image, PlayIcon} from '@src/commons';
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {MockData} from '@src/constants';
import {FlatList} from '@src/core-ui';
import utils from '@src/utils/utils';

export const Endorsements = () => {
  const theme = useSelector(store => store?.theme);
  return (
    <View style={styles().container}>
      <BoxViewWithTag label={'Endorsements'}>
        <FlatList
          horizontal={true}
          data={MockData.endorsements}
          renderItem={({item, index}) => {
            return (
              <View
                key={index.toString()}
                style={styles(theme).itemOuterContainer}>
                <PlayIcon onPress={() => utils.alert('play')} />
                <View style={styles(theme).itemContainer}>
                  <Image source={item?.image} style={styles().image} />
                </View>
                <BigHeading style={styles().name}>{item?.name}</BigHeading>
              </View>
            );
          }}
        />
      </BoxViewWithTag>
    </View>
  );
};
