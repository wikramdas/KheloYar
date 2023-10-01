import {CommonActions} from '@react-navigation/native';
import {Alert, Linking} from 'react-native';

export default {
  alert(message) {
    Alert.alert('Alert', message);
  },

  isArrayEmpty(array) {
    return !Array.isArray(array) || array.length === 0;
  },
  isObjectEmpty(object) {
    return Object.keys(object)?.length === 0;
  },
  isStringEmpty(str) {
    return !str || str?.trim() === '';
  },

  resetAndGo(navigation, routeName) {
    if (navigation && !this.isStringEmpty(routeName)) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: routeName}],
        }),
      );
    }
  },

  openLink(url) {
    if (url) {
      Linking.canOpenURL(url)
        .then(supported => {
          if (!supported) {
            console.log("Can't handle url: " + url);
          } else {
            return Linking.openURL(url);
          }
        })
        .catch(err => console.error('An error occurred', err));
    }
  },
  detailAlert(title, description, confirmText, cancelText, onConfirmPress) {
    Alert.alert(title, description, [
      {
        text: cancelText,
      },
      !this.isStringEmpty(confirmText) && {
        text: confirmText,
        onPress: () => {
          onConfirmPress();
        },
      },
    ]);
  },
};
