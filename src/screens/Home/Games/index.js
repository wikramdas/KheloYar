import {BoxViewWithTitle, Image, TextButton} from '@src/commons';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {SVG} from '@src/constants';
import {ScrollView} from '@src/core-ui';
import {commonStyle} from '@src/styles';
import utils from '@src/utils/utils';

export const Games = ({data, heading, subHeading}) => {
  const theme = useSelector(store => store?.theme);
  return (
    <View style={styles({}).container}>
      <BoxViewWithTitle
        heading={heading}
        subHeading={subHeading}
        rightView={
          <View style={commonStyle({}).flexRow}>
            <SVG.BALL_1 style={styles({}).ballIcon} />
            <SVG.BALL_2 style={styles({}).ballIcon} />
            <SVG.BALL_3 style={styles({}).ballIcon} />
          </View>
        }>
        {!utils.isArrayEmpty(data) &&
          data.map((parent, parentIdx) => {
            return (
              <View key={parentIdx?.toString()}>
                <ScrollView
                  horizontal={true}
                  containerStyle={styles(theme).flatlistContainer}>
                  {parent?.games.map((item, index) => {
                    return (
                      <TextButton
                        onPress={() => utils.alert('game detail')}
                        key={index?.toString()}>
                        <Image
                          source={{uri: item?.icon}}
                          style={styles(theme).gameImage}
                        />
                      </TextButton>
                    );
                  })}
                </ScrollView>
              </View>
            );
          })}
      </BoxViewWithTitle>
    </View>
  );
};

const styles = theme =>
  StyleSheet.create({
    container: {flex: 1},
    flatlistContainer: {paddingVertical: 5},
    gameImage: {
      width: 75,
      height: 75,
      borderRadius: 10,
      marginHorizontal: 5,
    },
  });
