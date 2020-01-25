import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.configure({ name: 'gobarbermobile' })
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  tron.clear();

  console.tron = tron;
}
