import React from 'react';
import {Switch as RNSwitch} from 'react-native';

export const Switch = ({value, onValueChange}) => {
  return (
    <RNSwitch
      trackColor={{false: 'lightgray', true: 'lightgray'}}
      thumbColor={value ? '#2887ef' : 'red'}
      size={19}
      ios_backgroundColor="lightgray"
      onValueChange={onValueChange}
      value={value}
    />
  );
};
