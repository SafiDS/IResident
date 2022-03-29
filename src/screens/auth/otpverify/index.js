import { ScrollView, View, Image, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { constant } from "../../../utils/const";
import string from "../../../utils/string";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import Button from "../../../components/button";
import color from "../../../utils/color";
import Routes from "../../../router/routes";

const OtpVerifyScreen = ({ navigation }) => {
  const [code, setCode] = useState("");

  const handleCodeChange = (text) => {
    setCode(text);
  };

  const handleJoinMeButton = () => {
    navigation.navigate(Routes.Dashboard);
  };
  return (
    <SafeAreaView style={styles.sacontainer}>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.svcontainer}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{ uri: constant.profileimage }}
          style={styles.iprofile}
        />
        <Text style={styles.tname}>{constant.name}</Text>
        <Text style={styles.temail}>{constant.email}</Text>
        <Text style={styles.tinfoheader1}>
          {string.you_are_not_part_of_iresident}
        </Text>
        <Text style={styles.tinfoheader2}>{string.enter_the_code}</Text>
        <View style={styles.votpcontainer}>
          <OTPInputView
            style={styles.oivcontainer}
            pinCount={5}
            code={code}
            onCodeChanged={handleCodeChange}
            autoFocusOnLoad
            codeInputFieldStyle={styles.codeinput}
            codeInputHighlightStyle={styles.codehighlighter}
          />
        </View>
        <Button
          buttoncotainer={styles.buttoncontainer}
          textColor={color.white}
          backgroundColor={color.primary}
          borderColor={color.primary}
          title={string.join_me}
          onPress={handleJoinMeButton}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpVerifyScreen;
