import {SVG} from '@src/constants';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

export const PlayIcon = ({style, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress && onPress()}
      style={styles(style).container}>
      <View style={styles().iconContainer}>
        <SVG.PLAY_ICON />
      </View>
    </TouchableOpacity>
  );
};

const styles = style =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 999,
    },
    iconContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
