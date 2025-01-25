import { SafeAreaView, StatusBar, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Colors } from "@/constants/Colors";
import { moderateScale } from "react-native-size-matters";
import { LoginValidator, LoginValidatorType } from "@/lib/loginValidators";
import http from "@/apis/api";
import { ToastMessage } from "@/utils/toast";
import { getError } from "@/utils/getErrMsg";
import Spacer from "@/utils/spacer";
import AuthHeader from "@/components/AuthHeader";
import InputBox from "@/components/InputBox";
import CustomBtn from "@/components/CustomBtn";
import RowTxtBtn from "@/components/RowTxtBtn";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { handleSubmit, control } = useForm<LoginValidatorType>({
    defaultValues: {
      mobile: "1234567892",
      password: "securepassword",
    },
    resolver: zodResolver(LoginValidator),
  });

  const handleLogin = async ({ mobile, password }: LoginValidatorType) => {
    try {
      setLoading(true);
      const { data } = await http.post("/api/auth/login", { mobile, password });
      console.log("This is the data coming from thea apis", data);
      setLoading(false);
      router.replace("/(tabs)");
    } catch (error: any) {
      setLoading(false);
      ToastMessage(getError(error));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.light.background}
        barStyle={"dark-content"}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps='always'
        showsVerticalScrollIndicator={false}
      >
        <Spacer height={15} />
        <AuthHeader
          title={`Login to your ${"\n"}account.`}
          desc='Please sign in to your account'
        />
        <Spacer height={30} />
        <InputBox
          placeholder='Enter mobile'
          title='Mobile'
          control={control}
          name='mobile'
        />
        <Spacer height={15} />
        <InputBox
          control={control}
          name='password'
          placeholder='Password'
          title='Password'
          isPassword
        />
        {/* <TouchableOpacity activeOpacity={0.8} style={styles.forgotBtn}>
          <Text style={styles.forgotBtnTxt}>Forgot Password?</Text>
        </TouchableOpacity> */}
        <Spacer height={30} />
        <CustomBtn
          disabled={loading}
          onPress={handleSubmit(handleLogin)}
          title={loading ? "Logging In..." : "Log In"}
        />
        <Spacer height={20} />
        <RowTxtBtn
          title="Don't have an account?"
          btnTxt='Register'
          onPress={() => {
            router.push("/signup");
          }}
        />
        <Spacer height={10} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  forgotBtn: {
    marginTop: moderateScale(20),
  },
  forgotBtnTxt: {
    color: "black",
    fontWeight: "500",
    textAlign: "right",
  },
  scrollContainer: {
    paddingHorizontal: moderateScale(20),
  },
});
