import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import string from "../../utils/string";
import styles from "./styles";
import { TextInput } from "react-native-paper";
import InputConfig from "../../utils/inputconfig";
import color from "../../utils/color";
import { Type_Of_SignUp } from "../../utils/enum";
import Button from "../button";

const SignUp = () => {
  const [tiEmail, setTiEmail] = useState("");
  const [tiPassword, setTiPassword] = useState("");
  const [tiRepeatPassword, setTiRepeatPassword] = useState("");
  const [tiName, setTiName] = useState("");
  const [tiFirstname, setTiFirstname] = useState("");
  const [tiLastname, setTiLastname] = useState("");

  const getInputValue = (index) => {
    switch (index) {
      case Type_Of_SignUp.Name:
        return tiName;
      case Type_Of_SignUp.FirstName:
        return tiFirstname;
      case Type_Of_SignUp.LastName:
        return tiLastname;
      case Type_Of_SignUp.Email:
        return tiEmail;
      case Type_Of_SignUp.Password:
        return tiPassword;
      case Type_Of_SignUp.RepeatPassword:
        return tiRepeatPassword;
    }
  };
  const handleTextChange = (text, index) => {
    switch (index) {
      case Type_Of_SignUp.Name:
        setTiName(text);
        break;
      case Type_Of_SignUp.FirstName:
        setTiFirstname(text);
        break;
      case Type_Of_SignUp.LastName:
        setTiLastname(text);
        break;
      case Type_Of_SignUp.Email:
        setTiEmail(text);
        break;
      case Type_Of_SignUp.Password:
        setTiPassword(text);
        break;
      case Type_Of_SignUp.RepeatPassword:
        setTiRepeatPassword(text);
        break;
    }
  };

  const handleRegisterButton = () => {
    alert("In Development");
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      bounces={false}
    >
      <Text style={styles.completetheflow}>
        {string.complete_following_register}
      </Text>
      <View style={styles.vinputcontainer}>
        {InputConfig.SignUpInput.map((item, index) => {
          return (
            <TextInput
              returnKeyType={item.ReturnKeyType}
              activeOutlineColor={color.primary}
              style={[styles.tilogin, index === 2 && styles.marignbottom]}
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
      <Button
        buttoncotainer={styles.buttoncontainer}
        textColor={color.white}
        backgroundColor={color.primary}
        borderColor={color.primary}
        title={string.register}
        onPress={handleRegisterButton}
      />
    </ScrollView>
  );
};

export default SignUp;
