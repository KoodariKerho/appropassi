import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";
import { useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
  const bars = useSelector((state) => state.stamps.value);

  useEffect(() => {
    if (bars === null) {
      navigation.navigate("Settings");
    }
  }, [bars]);

  return (
    <View>
      <Text style={styles.header}>Suomen pienimmät</Text>
      <MapView
        initialRegion={{
          latitude: bars[0].latitude,
          longitude: bars[0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ height: 400, width: 400 }}
      >
        {bars &&
          bars.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.name}
              description={marker.address}
            />
          ))}
      </MapView>
      <View>
        <Text style={styles.header2}>Jäljellä olevat rastit</Text>
        <FlatList
          data={bars}
          renderItem={({ item }) => {
            return (
              <View>
                <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
                  {item.name}
                </Text>
                <Text style={styles.paragraph}>{item.address}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    alignContent: "center",
    textAlign: "center",
    marginTop: 35,
    marginBottom: 10,
  },
  header2: {
    fontSize: 20,
    fontWeight: "bold",
    alignContent: "center",
    textAlign: "center",
    marginVertical: 20,
  },
  paragraph: {
    fontSize: 15,
    textAlign: "center",
  },
});

export default HomeScreen;
