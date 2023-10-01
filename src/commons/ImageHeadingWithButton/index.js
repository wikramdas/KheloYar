import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import {Image} from '@commons/Image';
import {Heading} from '../Heading';
import {SubHeading} from '../SubHeading';
import {commonStyle} from '@src/styles';
import {Button} from '@commons/Button';
export const ImageHeadingWithButton = ({
  heading,
  subHeading,
  headingStyle,
  subHeadingStyle,
  source,
  sourceType,
  imageStyle,
  showButton,
  buttonLabel,
  onButtonPress,
  header,
}) => {
  const theme = useSelector(store => store?.theme);

  const ICON = source;

  return (
    <View style={commonStyle().flexRow}>
      <View style={styles({}).container}>
        {sourceType === 'svg' ? (
          <ICON
            color={theme?.iconColor}
            style={styles({style: imageStyle}).image}
            height={header === true ? 35 : 50}
            width={header === true ? 35 : 50}
          />
        ) : (
          <Image
            source={ICON}
            resizeMode={'contain'}
            style={styles({style: imageStyle, header}).image}
          />
        )}
        <View>
          <Heading style={styles({style: headingStyle}).heading}>
            {heading}
          </Heading>
          <SubHeading style={styles({style: subHeadingStyle}).subHeading}>
            {subHeading}
          </SubHeading>
        </View>
      </View>
      {showButton && (
        <View style={styles({}).buttonContainer}>
          <Button
            label={buttonLabel}
            onPress={() => onButtonPress && onButtonPress()}
            gradient={true}
          />
        </View>
      )}
    </View>
  );
};
