import { StyleSheet, Text, View } from "react-native";
import React from "react";
import fontSize from "../utils/fontSizes";
import appColors from "../utils/appColors";
import { moderateScale } from "react-native-size-matters";

interface AuthHeaderProps {
  title: string;
  desc: string;
}

const AuthHeader = ({ title, desc }: AuthHeaderProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desTxt}>{desc} </Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: fontSize.h3,
    color: appColors.black,
    fontWeight: "600",
  },
  desTxt: {
    fontSize: fontSize.medium,
    color: appColors.grey,
    fontWeight: "500",
    marginTop: moderateScale(10),
  },
});
