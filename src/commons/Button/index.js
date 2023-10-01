import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Text} from '@src/commons/Text';
import {Loader} from '@src/commons/Loader';
import {styles} from './styles';
import {LinearGradient} from '@src/core-ui';
export const Button = ({
  onPress,
  bgStyle,
  txtStyle,
  label,
  disabled,
  loader,
  loaderSize,
  icon,
  gradient,
}) => {
  const theme = useSelector(store => store?.theme);

  const renderButtonView = () => {
    return (
      <>
        {loader ? (
          <View style={styles().loaderContainer}>
            <Loader size={loaderSize} />
          </View>
        ) : (
          <View style={styles().btnLabelContainer}>
            {icon ? (
              icon
            ) : (
              <Text style={styles({txtStyle, theme}).text}>{label}</Text>
            )}
          </View>
        )}
      </>
    );
  };
  return (
    <View style={styles().container}>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.9}
        onPress={() => onPress && onPress()}
        accessibilityRole="button">
        {gradient ? (
          <LinearGradient
            onPress={() => onPress && onPress()}
            style={styles({style: bgStyle}).innerContainer}>
            {renderButtonView()}
          </LinearGradient>
        ) : (
          <View
            style={styles({disabled, style: bgStyle, theme}).innerContainer}>
            {renderButtonView()}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};
