import AsyncStorage from '@react-native-community/async-storage';

export async function storeData(key, value) {
  await AsyncStorage.setItem(key, value);
  console.log('Stored ' + value + ' in ' + key + '.');
  return true;
}

export async function getData(key) {
  return await AsyncStorage.getItem(key);
}
