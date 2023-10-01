import {BoldText, SubHeading, Text} from '@src/commons';
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {SVG} from '@src/constants';
import {commonStyle} from '@src/styles';
import {SmallBoxes} from './SmallBoxes';
import utils from '@src/utils/utils';

export const InPlayItem = ({item}) => {
  return (
    <View style={styles({}).inPlayContainer}>
      <View style={styles({}).inPlayInfo}>
        <Text style={styles({}).inPlayTime}>{item?.time}</Text>
        <View style={commonStyle({}).flexRow}>
          <View style={styles({}).matchupTextContainer}>
            <View style={commonStyle({}).flexRow}>
              <SubHeading>{item?.team1}</SubHeading>
              <BoldText style={styles({}).vsText}>VS</BoldText>
              <SubHeading>{item?.team2}</SubHeading>
            </View>
            <Text>{item?.matchType}</Text>
          </View>
          <View style={styles({}).starContainer}>
            {item?.star === 'fill' ? <SVG.STAR_FILL /> : <SVG.STAR_EMPTY />}
          </View>
        </View>
      </View>
      <View style={styles({}).inPlayBoxesContainer}>
        {!utils.isArrayEmpty(item.scores) &&
          item.scores.map((score, index) => (
            <SmallBoxes item={score} key={index.toString()} />
          ))}
      </View>
    </View>
  );
};
