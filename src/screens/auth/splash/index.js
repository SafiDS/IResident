import React from "react";
import { Image, View } from "react-native";
import AppImages from "../../../assets/images";
import styles from "./styles";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={AppImages.ic_splash_logo}/>
    </View>
  );
};

export default SplashScreen;
