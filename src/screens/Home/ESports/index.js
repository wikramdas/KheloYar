import {
  BoldText,
  BoxViewWithTitle,
  Button,
  GradientProgress,
  Image,
  Text,
  TextButton,
} from '@src/commons';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IMG, MockData} from '@src/constants';
import {ImageBackground, ScrollView} from '@src/core-ui';
import utils from '@src/utils/utils';

export const ESports = () => {
  const theme = useSelector(store => store?.theme);
  return (
    <View style={styles({}).container}>
      <BoxViewWithTitle heading={'E-Sports'} subHeading={"LET'S PLAY"}>
        <View>
          <ScrollView
            horizontal={true}
            containerStyle={styles(theme).flatlistContainer}>
            {MockData?.esports.map((item, index) => {
              return (
                <View key={index?.toString()} style={styles().itemContainer}>
                  <ImageBackground
                    style={styles(theme).gameImageBG}
                    borderRadius={6}
                    source={IMG.GAME_BG}
                  />
                  <Image
                    source={{uri: item?.icon}}
                    style={styles(theme).gameImage}
                    resizeMode={'contain'}
                  />
                  <Text style={styles().smallText}>Popularity</Text>
                  <GradientProgress progress={item?.popularity} />
                  <BoldText style={styles().title}>{item?.title}</BoldText>
                  <View>
                    <Button
                      label={'Play'}
                      bgStyle={styles().playButton}
                      onPress={() => utils.alert('Play')}
                    />
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </BoxViewWithTitle>
    </View>
  );
};

const styles = theme =>
  StyleSheet.create({
    container: {flex: 1},
    flatlistContainer: {paddingVertical: 10},
    itemContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    gameImageBG: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    gameImage: {
      width: 100,
      height: 100,
      zIndex: 999,
      position: 'absolute',
      bottom: 90,
    },
    smallText: {fontSize: 10, marginTop: 5},
    playButton: {padding: 5, paddingHorizontal: 20, marginTop: 5},
  });
