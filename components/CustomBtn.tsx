import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import appColors from "../utils/appColors";
import { moderateScale } from "react-native-size-matters";

interface CustomBtnProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const CustomBtn = ({ title, disabled = false, onPress }: CustomBtnProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      style={styles.btn}
      onPress={onPress}
    >
      <Text numberOfLines={1} style={styles.btnTxt}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: appColors.primary,
    paddingVertical: moderateScale(12),
    borderRadius: moderateScale(25),
  },
  btnTxt: {
    color: appColors.white,
    textAlign: "center",
    fontWeight: "600",
  },
});
