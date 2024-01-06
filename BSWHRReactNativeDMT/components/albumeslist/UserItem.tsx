import React from "react";
import { Dimensions, Image, Text, View } from "react-native";

const UserItem = () =>{
    const {width} = Dimensions.get('window');
    return (
        <View
        style={{
            flex: 1,
            flexDirection: "row",
            margin: 1,
            height: 100,
            borderBlockColor: "black",
            borderWidth: 1,
            alignItems: "center"
        }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "black", margin: 10}}>
            User name
        </Text>
        </View>
    );
}

export default UserItem;