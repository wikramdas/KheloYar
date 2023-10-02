import {BoldText, TextButton} from '@src/commons';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {SVG} from '@src/constants';
import {useDispatch, useSelector} from 'react-redux';
import utils from '@src/utils/utils';
import {changeTheme} from '@src/redux/reducers/theme';
import {dark, light} from '@src/themes';

const socialIcons = [
  {id: 1, icon: SVG.FACEBOOK, label: 'FACEBOOK'},
  {id: 2, icon: SVG.INSTAGRAM, label: 'INSTAGRAM'},
  {id: 3, icon: SVG.TELEGRAM, label: 'TELEGRAM'},
  {id: 4, icon: SVG.TWITTER, label: 'TWITTER'},
  {id: 5, icon: SVG.YOUTUBE, label: 'YOUTUBE'},
  {id: 6, icon: SVG.SNAPCHAT, label: 'SNAPCHAT'},
  {id: 7, icon: SVG.SOCIAL_1, label: 'SOCIAL 1'},
  {id: 8, icon: SVG.SOCIAL_2, label: 'SOCIAL 2'},
];
export const SettingsAndSocial = () => {
  const dispatch = useDispatch();
  const theme = useSelector(store => store?.theme);

  const onChangeTheme = () => {
    dispatch(changeTheme(theme?.mode === 'light' ? dark : light));
  };

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
  const renderIcon = (icon, onPress) => {
    return <TextButton onPress={() => onPress && onPress()}>{icon}</TextButton>;
  };
  return (
    <View style={styles().container}>
      <View style={styles(theme).boxContainer}>
        {renderItem(<SVG.GLOBE />, 'English', () =>
          utils.alert('change language'),
        )}
        {renderItem(<SVG.DARK_MOON />, 'Dark', () => onChangeTheme())}
      </View>
      <View style={styles().socialIconContainer}>
        {socialIcons.map((item, index) => {
          const ICON = item?.icon;
          return (
            <View key={index.toString()}>
              {renderIcon(<ICON {...styles().socialIcon} />, () => {
                utils.alert(item?.label);
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
};
