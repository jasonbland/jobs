import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';

export default async () => {
  let previousToken = await AsyncStorage.getItem('pushtoken');
};
