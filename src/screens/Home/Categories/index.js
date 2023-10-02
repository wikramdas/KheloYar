import {Button, Image, SubHeading} from '@src/commons';
import {MockData, SVG} from '@src/constants';
import {ScrollView} from '@src/core-ui';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import utils from '@src/utils/utils';
import {useSelector} from 'react-redux';

export const Categories = () => {
  const theme = useSelector(store => store?.theme);
  return (
    <View style={styles().container}>
      <ScrollView horizontal>
        {MockData.categories.map((item, index) => {
          return (
            <TouchableOpacity
              key={index.toString()}
              activeOpacity={0.8}
              onPress={() => utils.alert(item?.title)}>
              <View style={styles().itemContainer}>
                <Image
                  source={{uri: item?.icon ?? ''}}
                  style={styles(theme).iconImage}
                  resizeMode={'contain'}
                />
                <SubHeading style={styles().title}>{item?.title}</SubHeading>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles().chevronContainer}>
        <Button
          bgStyle={styles().chevronButton}
          gradient={true}
          onPress={() => utils.alert('move')}
          icon={<SVG.CHEVRON_LEFT style={styles().chevronIcon} />}
        />
      </View>
    </View>
  );
};
