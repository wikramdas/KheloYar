import AsyncStorage from '@react-native-community/async-storage';

export const storeJwtToken = token =>
  new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.setItem('accessToken', token);
      return resolve();
    } catch (e) {
      return reject(e);
    }
  });

export const getJwtToken = () =>
  new Promise(async (resolve, reject) => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      return resolve(token);
    } catch (e) {
      return reject(e);
    }
  });

export const removeJwtToken = () =>
  new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.removeItem('accessToken');
      return resolve();
    } catch (e) {
      return reject(e);
    }
  });
