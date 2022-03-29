import { View, Pressable, Image, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { constant, dashboardList } from "../../utils/const";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import color from "../../utils/color";
import string from "../../utils/string";

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.sacontainer}>
      <View style={styles.vprofilecontainer}>
        <View style={styles.vprofileheadercontainer}>
          <View style={styles.vaddresscontainer}>
            <Text style={styles.addressheader1}>{string.addressheader1}</Text>
            <Text style={styles.addressheader2}>{string.addressheader2}</Text>
          </View>
          <Image
            source={{ uri: constant.profileimage }}
            style={styles.iprofile}
          />
        </View>
        <View style={styles.vlocationcontainer}>
          <Icon name="location-on" size={30} color={color.lightblack} />
          <Text style={styles.tlocation} numberOfLines={2}>
            {constant.location}
          </Text>
          <Icon
            name="star"
            size={30}
            color={color.primary}
            style={styles.staricon}
          />
        </View>
      </View>
      <View style={styles.vdahboardcontainer}>
        {dashboardList.map((rowItem, index) => {
          return (
            <View style={styles.vrowcontainer}>
              {rowItem.map((item, index) => {
                return (
                  <Pressable style={styles.vtabcontainer}>
                    <Image style={styles.icon} source={item.icon} />
                    <Text style={styles.title}>{item.title}</Text>
                  </Pressable>
                );
              })}
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
