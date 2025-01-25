import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import http from "@/apis/api";
import { ToastMessage } from "@/utils/toast";
import { getError } from "@/utils/getErrMsg";
import { useLocalSearchParams } from "expo-router";

const HostelDetails = () => {
  const { id } = useLocalSearchParams();
  const [hostelData, setHostelData] = useState(null);

  const getHostelData = async (id: string) => {
    try {
      const { data } = await http.get(`/api/hostels/${id}`);
      setHostelData(data.data);
    } catch (error) {
      ToastMessage(getError(error));
    }
  };

  useEffect(() => {
    if (typeof id === "string") {
      getHostelData(id);
    }
  }, [id]);

  return (
    <View>
      <Text style={{ color: "black" }}>HostelDetails {id}</Text>
      <Text>{JSON.stringify(hostelData)} ||||||</Text>
    </View>
  );
};

export default HostelDetails;

const styles = StyleSheet.create({});
