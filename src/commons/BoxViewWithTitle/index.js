import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import {BigHeading} from '@commons/BigHeading';
import {Text} from '@commons/Text';
export const BoxViewWithTitle = ({heading, subHeading, children, style}) => {
  const theme = useSelector(store => store?.theme);
  return (
    <View style={styles({theme, style}).container}>
      <View style={styles({}).header}>
        <View>
          <View style={styles({theme}).headingContainer}>
            <Text>{subHeading}</Text>
            <BigHeading style={styles({theme}).heading}>{heading}</BigHeading>
          </View>
        </View>
      </View>
      {children}
    </View>
  );
};
