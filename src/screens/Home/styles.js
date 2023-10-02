import {ScreenWidth} from '@src/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {paddingHorizontal: 10, paddingBottom: ScreenWidth / 2.6},
  aboutInfoTextContainer: {alignItems: 'center'},
  aboutInfoText: {textAlign: 'center', lineHeight: 20, fontSize: 16},
  copyrightText: {textAlign: 'center', fontSize: 12, marginTop: 5},
});
