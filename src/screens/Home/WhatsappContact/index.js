import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {SVG} from '@src/constants';
import {useSelector} from 'react-redux';
import {BoldText} from '@src/commons';
import utils from '@src/utils/utils';

export const WhatsappContact = () => {
  const theme = useSelector(store => store?.theme);
  return (
    <View style={styles(theme).container}>
      <View style={styles().whatsappIcon}>
        <SVG.WHATSAPP height={60} width={60} />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => utils.alert('open whatsapp')}
        style={styles(theme).buttonContainer}>
        <View style={styles(theme).buttonInnerContainer}>
          <BoldText style={styles().text}>
            Play and win. Get a new ID instantly over WhatsApp
          </BoldText>
          <View>
            <SVG.CHEVRON_RIGHT height={10} width={10} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
