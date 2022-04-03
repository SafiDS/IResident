import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import color from "../../utils/color";
import { SafeAreaView } from "react-native-safe-area-context";

const CommonToolbar = ({
  title,
  onBackClick,
  leftIcon,
  containerStyle,
  rightIcon1,
  rightIcon2,
}) => {
  return (
    <SafeAreaView style={[styles.saContainer, containerStyle]}>
      <Icon
        onPress={onBackClick}
        name={leftIcon}
        size={30}
        color={color.lightorange}
        style={styles.iLeftIcon}
      />
      <Text style={styles.tTitle}>{title}</Text>
      {rightIcon1 ? (
        <Icon
          onPress={onBackClick}
          name={rightIcon1}
          size={30}
          color={color.lightorange}
          style={styles.iRightIcon}
        />
      ) : null}
      {rightIcon2 ? (
        <Icon
          name={rightIcon2}
          onPress={onBackClick}
          size={30}
          color={color.lightorange}
          style={styles.iRightIcon}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default CommonToolbar;
