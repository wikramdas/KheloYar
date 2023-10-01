import React from 'react';
import {View} from 'react-native';
import {Image} from '@commons/Image';
import {styles} from './styles';
import {BoldText} from '@commons/BoldText';
import {useSelector} from 'react-redux';
import {Text} from '@commons/Text';
import {IMG} from '@src/constants';
import {GradientProgress} from '@commons/GradientProgress';

export const MatchupCard = ({item}) => {
  const theme = useSelector(store => store?.theme);
  const {team_1, team_1_flag, team_2, team_2_flag} = item;

  const maxTime = 24;
  const timeRemaining = parseFloat(item?.time);

  const progress = ((maxTime - timeRemaining) / maxTime) * 100;

  return (
    <View style={styles({theme}).container}>
      {item?.is_live && <Image source={IMG.LIVE} style={styles({}).live} />}
      <View style={styles({theme}).flagContainer}>
        <Image source={team_1_flag} style={styles({}).flag} />
        <BoldText style={styles({}).vsText}>VS</BoldText>
        <Image source={team_2_flag} style={styles({}).flag} />
      </View>

      <View style={styles({}).teamNameContainer}>
        <BoldText style={styles({}).teamNameText}>
          {team_1} VS {team_2}
        </BoldText>
      </View>
      {item?.time && (
        <>
          <GradientProgress progress={progress} />
          <Text style={styles({}).time}>{item?.time} Hours Left</Text>
        </>
      )}
    </View>
  );
};
