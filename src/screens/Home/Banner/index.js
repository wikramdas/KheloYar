import {BigHeading, Button, GradientCircle, Text} from '@src/commons';
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export const Banner = ({
  infoText,
  heading,
  subHeading,
  buttonText,
  image,
  reverse,
  onPress,
  gradient,
}) => {
  const theme = useSelector(store => store?.theme);

  return (
    <View style={styles({reverse}).container}>
      <View style={styles({}).leftContainer}>
        <Text style={styles({theme}).infoText}>{infoText}</Text>
        <View style={styles({}).headingContainer}>
          <BigHeading>{heading}</BigHeading>
          {subHeading && (
            <Text style={styles({}).subHeading}>{subHeading}</Text>
          )}
        </View>
        <View>
          <Button
            label={buttonText}
            gradient={gradient}
            bgStyle={styles({}).button}
            onPress={() => onPress && onPress()}
          />
        </View>
      </View>
      <View>
        <GradientCircle image={image} />
      </View>
    </View>
  );
};
