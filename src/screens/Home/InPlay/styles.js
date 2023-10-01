import {StyleSheet} from 'react-native';
import {commonStyle} from '@src/styles';
export const styles = ({theme, style, empty}) =>
  StyleSheet.create({
    container: {flex: 1},
    ballIcon: {marginRight: 5},

    // inPlay style
    inPlayContainer: {paddingVertical: 10},
    inPlayInfo: {flex: 1, paddingVertical: 10},
    inPlayTime: {marginBottom: 6},
    vsText: {fontSize: 10, marginHorizontal: 10},
    matchupTextContainer: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      flex: 1,
      left: 10,
    },
    starContainer: {alignItems: 'flex-end', marginRight: 5},
    inPlayBoxesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    // SmallBoxes style
    smallBoxesContainer: commonStyle({}).flexRow,
    commonBoxStyle: {
      ...commonStyle(theme).boxShadow,
      alignItems: 'center',
      width: 52,
      marginHorizontal: 2,
      borderRadius: 5,
    },
    firstBox: {
      backgroundColor: empty ? theme?.secondaryLight : theme?.secondaryColor,
    },
    secondBox: {
      backgroundColor: empty ? theme?.tertiaryLight : theme?.tertiaryColor,
    },
    boxText: {color: '#fff'},
  });
