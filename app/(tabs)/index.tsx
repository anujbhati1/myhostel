import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useNavigation, useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => {
          router.push("/hostel-details");
        }}
        title='Go to Hostel Details'
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
