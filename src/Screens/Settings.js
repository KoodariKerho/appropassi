import React, {useState} from "react";
import { View, Text, StyleSheet, Button, FlatList, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { changeCode } from "../Redux/Features/Appro/ApproCode";
import { changeStamps } from "../Redux/Features/Stamps/StampSlice";
const Settings = ({navigation}) => {
    const dispatch = useDispatch()
    const [code, setCode] = useState('')

    const getApproData = async () => {
        //TODO: Fetch data from API

        //Response from API
        data = {
            bars: [
                {
                  name: "M Bar",
                  address: "Mannerheimintie 56, 00100 Helsinki",
                  latitude: 60.172448,
                  longitude: 24.932687,
                  scanned: false,
                },
                {
                  name: "Bar Loose",
                  address: "Annankatu 21, 00100 Helsinki",
                  latitude: 60.167389,
                  longitude: 24.940973,
                  scanned: false,
                },
                {
                  name: "Hercules",
                  address: "Sofiankatu 2, 00170 Helsinki",
                  latitude: 60.191265,
                  longitude: 24.927406,
                  scanned: false,
                },
                {
                  name: "Bryggeri Helsinki",
                  address: "Mikonkatu 15, 00100 Helsinki",
                  latitude: 60.170848,
                  longitude: 24.932054,
                  scanned: false,
                },
                {
                    name: "Baarikärpänen",
                    address: "Keskuskatu 8, 00100 Helsinki",
                    latitude: 60.168830,
                    longitude: 24.942900,
                    scanned: false,
                    },
              ]
        }
        dispatch(changeStamps(data.bars))
    }

    const handleSubmit = () => {
        dispatch(changeCode(code))
        getApproData();
        navigation.navigate("Tabs");
    }

    const handleChange = (text) => {
        setCode(text)
    }

    return (
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
        <Text>Settings</Text>
        <TextInput 
        placeholder="Approkoodi"
        onChangeText={text => handleChange(text)}
         />
         <Button title="Lisää" onPress={handleSubmit} />
        </View>
    );
    };

export default Settings;