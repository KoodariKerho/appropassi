import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useDispatch, useSelector } from "react-redux";
import { changeStamps } from "../Redux/Features/Stamps/StampSlice";

const Square = ({ size, bar }) => {
  console.log(bar);
  return (
    <View>
      <View
        style={
          bar.scanned
            ? [styles.scanned, { width: size, height: size }]
            : [styles.square, { width: size, height: size }]
        }
      />
      <Text style={{ alignSelf: "center" }}>{bar.name}</Text>
    </View>
  );
};

const Grid = ({ size, bars }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [hideReader, setHideReader] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    for (let i = 0; i < bars.length; i++) {
      if (data === bars[i].name) {
        console.log("Scanned: " + data);
        try {
          bars[i].scanned = true;
          dispatch(changeStamps(bars))
        } catch (error) {
          console.log(error)
        }

      }
    }
    setHideReader(true);
    setScanned(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const squares = [];
  for (let i = 0; i < bars.length; i++) {
    squares.push(
      <Square setHideReader={setHideReader} key={i} size={size} bar={bars[i]} />
    );
  }
  return (
    <View>
      <Button
        title={hideReader ? "Show reader" : "Hide reader"}
        onPress={() => setHideReader(!hideReader)}
      />
      {hideReader ? (
        <View style={styles.gridContainer}>
          {squares.map((square) => square)}
        </View>
      ) : (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.QrReader}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    margin: 10,
    padding: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  scanned: {
    margin: 10,
    padding: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "green",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  QrReader: {
    height: 200,
    width: 200,
    alignSelf: "center",
  },
});

export default Grid;
