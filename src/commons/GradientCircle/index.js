import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {LinearGradient} from '@src/core-ui';
import {Image} from '@commons/Image';
import {IMG} from '@src/constants';

export const GradientCircle = ({image}) => {
  const theme = useSelector(store => store?.theme);

  return (
    <View style={styles({theme}).container}>
      <LinearGradient style={styles({}).gradientCircle}>
        <Image
          source={image || IMG.AD_1}
          style={styles({}).image}
          resizeMode={'contain'}
        />
      </LinearGradient>
    </View>
  );
};
