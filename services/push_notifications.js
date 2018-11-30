import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';

export default async () => {
  let previousToken = await AsyncStorage.getItem('pushtoken');

  if (previousToken) {
    return;
  } else {
    let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

    if (status !== 'granted') {
      return;
    }

    let token = await Notifications.getExpoPushTokenAsync();
  }
};
