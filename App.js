import React from 'react';
import {View, LogBox, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './redux/store';
import MainNavigator from './navigation/MainNavigator';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
