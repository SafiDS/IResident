import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import AppImages from "../../assets/images";
import styles from "./styles";
import color from "../../utils/color";
import string from "../../utils/string";
import InputConfig from "../../utils/inputconfig";
import { TextInput } from "react-native-paper";
import { Type_Of_SignIn } from "../../utils/enum";
import Button from "../button";

const LogIn = () => {
  const [tiEmail, setTiEmail] = useState("");
  const [tiPassword, setTiPassword] = useState("");
  const [isConditionAgree, setIsConditionAgree] = useState("");

  const getInputValue = (index) => {
    switch (index) {
      case Type_Of_SignIn.Email:
        return tiEmail;
      case Type_Of_SignIn.Password:
        return tiPassword;
    }
  };
  const handleTextChange = (text, index) => {
    switch (index) {
      case Type_Of_SignIn.Email:
        setTiEmail(text);
        break;
      case Type_Of_SignIn.Password:
        setTiPassword(text);
        break;
    }
  };
  const handleConditionAgrrement = () => {
    setIsConditionAgree(!isConditionAgree);
  };
  const handleGetIntoButton = () => {
    alert(string.in_development);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      bounces={false}
    >
      <Image source={AppImages.ic_login_logo} style={styles.ilogo} />
      <View style={styles.vtitlecotainer}>
        <Text style={styles.twelcometo}>{string.welcome_to}</Text>
        <Text style={styles.tappname}>{string.app_name}</Text>
      </View>
      <Text style={styles.tsigninto}>{string.sign_in_to_continue}</Text>
      <View style={styles.vinputcontainer}>
        {InputConfig.SignInInput.map((item, index) => {
          return (
            <TextInput
              returnKeyType={item.ReturnKeyType}
              activeOutlineColor={color.primary}
              style={styles.tilogin}
              mode="outlined"
              autoCapitalize={item.AutoCapitalize}
              keyboardType={item.KeyboardType}
              label={item.PlaceHolder}
              value={getInputValue(index)}
              onChangeText={(text) => {
                handleTextChange(text, index);
              }}
            />
          );
        })}
      </View>
      <View style={styles.vsavepasswordcontainer}>
        <Pressable
          style={[
            styles.psavepasswordcontainer,
            isConditionAgree && styles.pselected,
          ]}
          onPress={handleConditionAgrrement}
        >
          <Image source={AppImages.ic_white_check} style={styles.icheck} />
        </Pressable>
        <Text style={styles.trememberpassword}>{string.remember_password}</Text>
      </View>
      <Button
        buttoncotainer={styles.buttoncontainer}
        textColor={color.white}
        backgroundColor={color.primary}
        borderColor={color.primary}
        title={string.get_into}
        onPress={handleGetIntoButton}
      />
      <Text style={styles.iforgotpassword}>{string.i_forgot_password}</Text>
    </ScrollView>
  );
};

export default LogIn;
