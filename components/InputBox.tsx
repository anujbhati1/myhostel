import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import appColors from "../utils/appColors";
import appIcons from "../utils/appIcons";
import { moderateScale } from "react-native-size-matters";
import fontSize from "../utils/fontSizes";
import { Controller } from "react-hook-form";

interface InputBoxProps {
  name: string;
  control: any;
  title?: string;
  placeholder: string;
  isPassword?: boolean;
}

const InputBox = ({
  name,
  control,
  title,
  placeholder,
  isPassword = false,
}: InputBoxProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <View style={styles.inputView}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <Controller
        control={control}
        name={name}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <View style={styles.txtInputView}>
              <TextInput
                placeholder={placeholder}
                placeholderTextColor={appColors.grey}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={styles.textInput}
                secureTextEntry={isPassword && !showPassword}
              />
              {isPassword ? (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setShowPassword((pre) => !pre)}
                >
                  <Image
                    source={showPassword ? appIcons.eyeclose : appIcons.eye}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
            {error && <Text style={styles.errorMsg}>*{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  errorMsg: {
    color: appColors.red,
    fontSize: fontSize.small,
  },
  inputView: {},
  txtInputView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: moderateScale(1),
    borderColor: appColors.lightGrey,
    paddingHorizontal: moderateScale(7),
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(7),
  },
  title: {
    color: appColors.black,
    fontWeight: "500",
    marginBottom: moderateScale(4),
  },
  textInput: {
    flex: 1,
    fontSize: fontSize.medium,
    fontWeight: "500",
    color: appColors.black,
  },
  icon: {
    height: moderateScale(22),
    width: moderateScale(22),
    resizeMode: "contain",
  },
});
