import { SafeAreaView, StatusBar, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { moderateScale } from "react-native-size-matters";
import { SignupValidator, SignupValidatorType } from "@/lib/signupValidators";
import http from "@/apis/api";
import { ToastMessage } from "@/utils/toast";
import { getError } from "@/utils/getErrMsg";
import appColors from "@/utils/appColors";
import Spacer from "@/utils/spacer";
import AuthHeader from "@/components/AuthHeader";
import InputBox from "@/components/InputBox";
import CustomBtn from "@/components/CustomBtn";
import RowTxtBtn from "@/components/RowTxtBtn";
import { useRouter } from "expo-router";

const Signup = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { handleSubmit, control } = useForm<SignupValidatorType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      city: "",
      mobile: "",
    },
    resolver: zodResolver(SignupValidator),
  });

  const handleSignup = async ({
    name,
    email,
    password,
    city,
    mobile,
  }: SignupValidatorType) => {
    try {
      setLoading(true);
      const { data } = await http.post("/api/auth/signup", {
        name,
        email,
        role: "ADMIN",
        city,
        mobile,
        password,
      });
      console.log("This is data", data);
      // AsyncStorage.setItem('userId', data.data.id);
      setLoading(false);
      router.replace("/(tabs)");
    } catch (error: any) {
      setLoading(false);
      ToastMessage(getError(error));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={appColors.white} barStyle={"dark-content"} />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps='always'
        showsVerticalScrollIndicator={false}
      >
        <Spacer height={15} />
        <AuthHeader
          title={`Create a new ${"\n"}account.`}
          desc='Create an account to start adding your Hostels'
        />
        <Spacer height={30} />
        <InputBox
          name='name'
          control={control}
          placeholder='Enter Full Name'
          title='Full Name'
        />
        <Spacer height={15} />
        <InputBox
          name='mobile'
          control={control}
          placeholder='Enter Mobile'
          title='Mobile'
        />
        <Spacer height={15} />
        <InputBox
          name='email'
          control={control}
          placeholder='Enter Email'
          title='Email Address'
        />
        <Spacer height={15} />
        <InputBox
          name='city'
          control={control}
          placeholder='Enter City'
          title='City'
        />
        <Spacer height={15} />
        <InputBox
          name='password'
          control={control}
          placeholder='Enter Password'
          title='Password'
          isPassword
        />
        <Spacer height={30} />
        <CustomBtn
          disabled={loading}
          onPress={handleSubmit(handleSignup)}
          title={loading ? "Registering..." : "Register"}
        />
        <Spacer height={20} />
        <RowTxtBtn
          title='Have an account?'
          btnTxt='Sign In'
          onPress={() => {
            router.back();
          }}
        />
        <Spacer height={10} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  scrollContainer: {
    paddingHorizontal: moderateScale(20),
  },
});
