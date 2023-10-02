import React from 'react';
import {BackgroundVector, Header, Text, Wrapper} from '@src/commons';
import {ScrollView} from '@src/core-ui';

import {Banner} from './Banner';
import {Categories} from './Categories';
import {PopularToday} from './PopularToday';
import {InPlay} from './InPlay';
import {FeaturedGames} from './FeaturedGames';
import utils from '@src/utils/utils';
import {IMG} from '@src/constants';
import {CasinoGames} from './CasinoGames';
import {GameOfMonth} from './GameOfMonth';
import {ESports} from './ESports';
import {DownloadAppBanner} from './DownloadAppBanner';
import {Endorsements} from './Endorsements';
import {Tutorials} from './Tutorials';
import {View} from 'react-native';
import {commonStyle} from '@src/styles';
import {SettingsAndSocial} from './SettingsAndSocial';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {Pages} from './Pages';
import {PaymentGatways} from './PaymentGatways';
import {WhatsappContact} from './WhatsappContact';

export const Home = () => {
  const theme = useSelector(store => store?.theme);
  return (
    <Wrapper>
      <Header />
      <ScrollView>
        <BackgroundVector />
        <Categories />
        <View style={styles.container}>
          <Banner
            infoText={'WELCOME TO KHELOYAR'}
            heading={'INDIA’S MOST TRUSTED'}
            subHeading={'GAMING PLATFORM'}
            buttonText={'Signup Now'}
            image={IMG.AD_1}
            onPress={() => utils.alert('Signup Now')}
            gradient
          />
          <BackgroundVector />
          <PopularToday />
          <BackgroundVector />
          <InPlay />
          <FeaturedGames />
          <BackgroundVector />
          <Banner
            infoText={'GET A NEW ID INSTANTLY'}
            heading={'OVER WHATSAPP'}
            buttonText={'GET ID NOW'}
            image={IMG.AD_2}
            onPress={() => utils.alert('get ID now')}
            reverse={true}
          />
          <BackgroundVector />
          <CasinoGames />
          <BackgroundVector />
          <GameOfMonth />
          <BackgroundVector />
          <ESports />
          <BackgroundVector />
          <DownloadAppBanner />
          <BackgroundVector />
          <Endorsements />
          <BackgroundVector />
          <Tutorials />
          <BackgroundVector />
          <View style={commonStyle(theme).lineSeparator} />
          <SettingsAndSocial />
          <BackgroundVector />
          <View style={commonStyle(theme).lineSeparator} />
          <Pages />
          <View style={commonStyle(theme).lineSeparator} />
          <PaymentGatways />
          <View style={commonStyle(theme).lineSeparator} />
          <BackgroundVector />
          <View style={styles.aboutInfoTextContainer}>
            <Text style={styles.aboutInfoText}>
              Kheloyar.net is a product of Kheloyar Group which operates in
              accordance with the License granted by SVG Gambling Commission
              under the license
            </Text>
            <Text style={styles.copyrightText}>
              © 2022 Kheloyar. All rights reserved.
            </Text>
          </View>
          <WhatsappContact />
        </View>
      </ScrollView>
    </Wrapper>
  );
};
