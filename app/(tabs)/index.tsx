import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import { ToastMessage } from "@/utils/toast";
import { getError } from "@/utils/getErrMsg";
import http from "@/apis/api";
import { Hostel } from "@/types";

const HomeScreen = () => {
  const [hostels, setHostels] = useState<Hostel[]>([]);

  const getHostels = async () => {
    try {
      const { data } = await http.get("/api/hostels");
      setHostels(data.data);
    } catch (error) {
      ToastMessage(getError(error));
    }
  };

  useEffect(() => {
    getHostels();
  }, []);

  const renderHostels = ({ item, index }: { item: Hostel; index: number }) => {
    return (
      <Link href={`/hostel-details/${item.id}`}>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.address}</Text>
          <Text>{item.hostelRent}</Text>
          <Text>{item.lat}</Text>
          <Text>{item.lng}</Text>
          <Text>{item.userId}</Text>
        </View>
      </Link>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>Hostels</Text>
      <FlatList data={hostels} renderItem={renderHostels} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
