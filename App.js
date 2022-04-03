import React from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import AppNavigator from "./src/router";

import { Provider as PaperProvider } from "react-native-paper";

LogBox.ignoreAllLogs();

const App = (props) => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
};

export default App;
