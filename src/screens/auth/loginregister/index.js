import { Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { TabView, TabBar } from "react-native-tab-view";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import string from "../../../utils/string";
import SignUp from "../../../components/signup";
import LogIn from "../../../components/login";
import color from "../../../utils/color";

const LoginRegisterScreen = ({ navigation, route }) => {
  const [index, setIndex] = useState(0);
  const tabRef = useRef();
  const { destination } = route.params;

  useEffect(() => {
    alert(destination);
    if (destination) {
    }
  });
  const routes = [
    { key: string.login, title: string.login },
    { key: string.signup, title: string.signup },
  ];
  const renderScene = ({ route }) => {
    switch (route.key) {
      case string.login:
        return <LogIn {...{ navigation }} />;
      case string.signup:
        return <SignUp {...{ navigation }} />;
    }
  };
  const _renderLabel = ({ route, color }) => (
    <Text style={[styles.ttabtitle, { color }]}>{route.title}</Text>
  );
  const renderTabBar = (props) => {
    return (
      <TabBar
        ref={tabRef}
        {...props}
        getLabelText={({ route }) => route.title.toLowerCase()}
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        activeColor={color.primary}
        inactiveColor={color.grey}
        labelStyle={styles.ttabtitle}
        renderLabel={_renderLabel}
      />
    );
  };

  const handleIndexChange = (index) => {
    setIndex(index);
  };

  return (
    <SafeAreaView style={styles.sacontainer}>
      <TabView
        lazy
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={handleIndexChange}
      />
    </SafeAreaView>
  );
};

export default LoginRegisterScreen;
