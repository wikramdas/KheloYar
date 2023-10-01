import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {Heading, Image, ImageHeadingWithButton} from '@src/commons';
import utils from '@src/utils/utils';
import {LinearGradient} from '@src/core-ui';
import {IMG, SVG} from '@src/constants';
import {styles} from './styles';
import {config} from '@src/configs';
export const DownloadAppBanner = () => {
  const theme = useSelector(store => store?.theme);
  return (
    <View style={styles({}).container}>
      <View style={styles({theme}).shadow}>
        <View style={styles({}).header}>
          <LinearGradient style={styles({}).gradientContainer}>
            <View style={styles({}).downloadTextContainer}>
              <Heading style={styles({}).downloadText}>
                DOWNLOAD OUR APP
              </Heading>
            </View>
          </LinearGradient>
          <View>
            <Image
              source={IMG.DOWNLOAD_APP_BANNER}
              style={styles({}).addImage}
              resizeMode={'contain'}
            />
          </View>
        </View>
        <View>
          <ImageHeadingWithButton
            heading={config.appName}
            subHeading={'Explore More Features'}
            sourceType={'svg'}
            source={SVG.LOGO_DARK}
            showButton={true}
            buttonLabel={'Get App'}
            onButtonPress={() => utils.alert('Get App')}
          />
        </View>
      </View>
    </View>
  );
};
