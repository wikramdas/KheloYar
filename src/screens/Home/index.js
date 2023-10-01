import React from 'react';
import {Header, Wrapper} from '@src/commons';
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

export const Home = () => {
  return (
    <Wrapper>
      <Header />
      <ScrollView>
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
          <PopularToday />
          <InPlay />
          <FeaturedGames />
          <Banner
            infoText={'GET A NEW ID INSTANTLY'}
            heading={'OVER WHATSAPP'}
            buttonText={'GET ID NOW'}
            image={IMG.AD_2}
            onPress={() => utils.alert('get ID now')}
            reverse={true}
          />
          <CasinoGames />
          <GameOfMonth />
          <ESports />
          <DownloadAppBanner />
          <Endorsements />
          <Tutorials />
          <View style={commonStyle().lineSeparator} />
          <SettingsAndSocial />
        </View>
      </ScrollView>
    </Wrapper>
  );
};
