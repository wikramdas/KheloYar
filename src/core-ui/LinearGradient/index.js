import {Text} from '@commons/Text';
import React from 'react';
import RNLinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {styles} from './styles';
export const LinearGradient = ({
  style,
  children,
  onPress,
  disabled,
  buttonContainer,
  start,
  end,
  angle,
  ...props
}) => {
  const theme = useSelector(store => store.theme);
  return (
    <RNLinearGradient
      colors={[theme?.secondaryColor, theme?.tertiaryColor]}
      start={start}
      end={end}
      style={styles({style}).linearGradient}
      useAngle
      angle={angle || 0}
      {...props}>
      {children?.length === undefined ? (
        children
      ) : (
        <Text style={styles({theme}).buttonText}>{children}</Text>
      )}
    </RNLinearGradient>
  );
};
