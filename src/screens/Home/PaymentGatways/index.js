import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {SVG} from '@src/constants';
import {useSelector} from 'react-redux';

const p_gatways = [
  {id: 1, icon: SVG.UPI, label: 'UPI'},
  {id: 2, icon: SVG.PAYTM, label: 'PAYTM'},
  {id: 3, icon: SVG.GPAY, label: 'GPAY'},
  {id: 4, icon: SVG.PHONEPE, label: 'PHONEPE'},
  {id: 5, icon: SVG.BANK_TRANSFER, label: 'Bank Transfer'},
  {id: 6, icon: SVG.BE_GAMBLE, label: 'Be Gamble'},
];
export const PaymentGatways = () => {
  const theme = useSelector(store => store?.theme);
  return (
    <View style={styles(theme).container}>
      {p_gatways.map((item, index) => {
        const ICON = item?.icon;
        return (
          <View key={index.toString()} style={styles().itemContainer}>
            <ICON />
          </View>
        );
      })}
    </View>
  );
};
