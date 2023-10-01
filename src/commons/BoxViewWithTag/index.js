import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {SubHeading} from '../SubHeading';
import {styles} from './styles';
export const BoxViewWithTag = ({label, children, rightView, style}) => {
  const theme = useSelector(store => store?.theme);
  return (
    <View style={styles({theme, style}).container}>
      <View style={styles({}).header}>
        <View>
          <View style={styles({theme}).tagContainer}>
            <SubHeading style={styles({theme}).tagLabel}>{label}</SubHeading>
          </View>
        </View>
        {rightView && rightView}
      </View>
      {children}
    </View>
  );
};
