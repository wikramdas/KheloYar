import {BoldText} from '@src/commons';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {SVG} from '@src/constants';
import {useSelector} from 'react-redux';
import utils from '@src/utils/utils';

export const SettingsAndSocial = () => {
  const theme = useSelector(store => store?.theme);
  const renderItem = (icon, label, onPress) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPress && onPress()}
        style={styles(theme).box}>
        {icon}
        <BoldText>{label}</BoldText>
        <SVG.CHEVRON_BOTTOM />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles().container}>
      <View style={styles(theme).boxContainer}>
        {renderItem(<SVG.GLOBE />, 'English', () =>
          utils.alert('change language'),
        )}
        {renderItem(<SVG.DARK_MOON />, 'Dark', () =>
          utils.alert('change theme'),
        )}
      </View>
    </View>
  );
};
