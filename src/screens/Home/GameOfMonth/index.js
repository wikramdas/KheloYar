import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {BigHeading, ImageHeadingWithButton} from '@src/commons';
import utils from '@src/utils/utils';
import {ImageBackground} from '@src/core-ui';
import {IMG} from '@src/constants';
import {styles} from './styles';
export const GameOfMonth = () => {
  const theme = useSelector(store => store?.theme);
  return (
    <View style={styles({}).container}>
      <View style={styles({theme}).shadow}>
        <View style={styles({}).header}>
          <ImageBackground
            source={{
              uri: 'https://cimg.co/news/97349/242166/aviator-casino-sites.jpg',
            }}
            style={styles({}).coverImage}
            imageStyle={styles({}).coverImage}
            resizeMode={'cover'}>
            <ImageBackground
              source={IMG.SHADOW_LEFT}
              style={styles({}).shadowImage}>
              <View style={styles({}).headingContainer}>
                <BigHeading style={styles({}).title}>GAME OF THE</BigHeading>
                <BigHeading
                  style={{...styles({}).title, ...styles({}).headingBig}}>
                  MONTH
                </BigHeading>
              </View>
            </ImageBackground>
          </ImageBackground>
        </View>
        <View>
          <ImageHeadingWithButton
            heading={'Aviator'}
            subHeading={'Instant Game, Instant Win!'}
            source={{
              uri: 'https://aviatorplaygame.com/wp-content/uploads/2022/11/aviator-logo-3.webp',
            }}
            showButton={true}
            buttonLabel={'Play Now'}
            onButtonPress={() => utils.alert('play now')}
          />
        </View>
      </View>
    </View>
  );
};
