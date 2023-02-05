import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Text } from "react-native";

const PrimaryHandler = ({navigation}) =>{
    const bars = useSelector((state) => state.stamps.value);
    useEffect(() => {
        console.log("PrimaryHandler")
        if(bars === null) {
            navigation.navigate("Settings")
        }else{
            navigation.navigate("Tabs")
        }
    }, [])
    return(
        <Text>Loading</Text>
    )
}

export default PrimaryHandler;