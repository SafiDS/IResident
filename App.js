import React from 'react';
import {LogBox} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store'
import AppNavigator from './src/router';

LogBox.ignoreAllLogs();

const App = (props) => {
  return (
    <Provider store={store}>
     <AppNavigator/>
     </Provider>
  );
};

export default App;
