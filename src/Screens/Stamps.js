import * as SecureStore from "expo-secure-store";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import "react-native-get-random-values";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Grid from "../Components/Grid";
import { changeDevice } from "../Redux/Features/Device/DeviceSlice";

const Stamps = ({ navigation }) => {
  const [bars, setBars] = useState(useSelector((state) => state.stamps.value));

  useEffect(() => {
    if(bars === null) {
      navigation.navigate("Settings")
    }
  }, [bars])

      const dispatch = useDispatch()
      let uuid = useSelector((state) => state.device.value);
      if(uuid === null) {
        uuid = uuidv4();
        dispatch(changeDevice(uuid))
      }
      const eventID = useSelector((state) => state.code.value);
      if(eventID === null) {
        console.log("No eventID")
      }


  return (
    <View>
        <Text>{uuid}</Text>
        <Text>{eventID}</Text>
        <Grid bars={bars} size={50} />
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
    },

  });

export default Stamps;
