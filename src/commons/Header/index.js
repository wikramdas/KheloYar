import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {TextButton} from '@commons/TextButton';
import {Text} from '@commons/Text';
import {styles} from './styles';
import {IMG, SVG} from '@src/constants';
import {Image} from '@commons/Image';
import {ImageHeadingWithButton} from '@commons/ImageHeadingWithButton';
import {Button} from '../Button';
import utils from '@src/utils/utils';
import {commonStyle} from '@src/styles';
export const Header = ({style}) => {
  const theme = useSelector(store => store?.theme);

  const handleOnMenu = () => {
    utils.alert('menu view');
  };

  const onProfileClick = () => {
    utils.alert('profile view');
  };
  return (
    <View style={styles({style, theme}).container}>
      <View style={styles({}).leftIconContainer}>
        <TextButton
          onPress={() => handleOnMenu()}
          style={styles({theme}).leftIconInnerContainer}>
          <View>
            <SVG.MENU color={theme?.iconColor} height={22} width={22} />
          </View>
        </TextButton>

        <View style={commonStyle().flex_1}>
          <ImageHeadingWithButton
            heading={'KHELOYAR'}
            subHeading={'जीत को आदत बनाओ'}
            sourceType={'svg'}
            source={SVG.LOGO_LIGHT}
            header={true}
          />
        </View>
      </View>

      <View style={styles({}).rightIconContainer}>
        <View style={styles({theme}).walletContainer}>
          <View style={styles({}).walletCash}>
            <Text style={styles({}).walletCashText}>₹589.31</Text>
            <Text style={styles({}).walletCashBonus}>Bonus: 123</Text>
          </View>
          <View>
            <Button
              onPress={() => utils.alert('add amount')}
              bgStyle={styles({}).plusButton}
              icon={<SVG.PLUS />}
            />
          </View>
        </View>
        <View style={styles({}).userImageContainer}>
          <TextButton onPress={() => onProfileClick()}>
            <Image
              resizeMode={'contain'}
              source={IMG.PROFILE}
              style={styles({}).userImage}
            />
          </TextButton>
        </View>
      </View>
    </View>
  );
};
