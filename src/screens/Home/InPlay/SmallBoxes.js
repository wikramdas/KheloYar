import {BoldText, Text} from '@src/commons';
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export const SmallBoxes = ({item}) => {
  const theme = useSelector(store => store?.theme);

  const rednerTextItem = (value1, value2) => {
    return (
      <>
        <BoldText style={styles({}).boxText}>{value1}</BoldText>
        <Text style={styles({}).boxText}>{value2}</Text>
      </>
    );
  };
  return (
    <View style={styles({}).smallBoxesContainer}>
      <View
        style={[
          styles({theme}).commonBoxStyle,
          styles({theme, empty: item?.is_empty}).firstBox,
        ]}>
        {rednerTextItem(item?.team1, item?.team1_subheading)}
      </View>
      <View
        style={[
          styles({theme}).commonBoxStyle,
          styles({theme, empty: item?.is_empty}).secondBox,
        ]}>
        {rednerTextItem(item?.team2, item?.team2_subheading)}
      </View>
    </View>
  );
};
