import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

const AlbumTitle = () =>{
    const {width} = Dimensions.get('window');
    return (
        <View
        style={{
            flex: 1,
            flexDirection: "row",
            margin: 1,
            borderBlockColor: "black",
            borderWidth: 1,
            alignItems: "center",
            justifyContent : "space-between"
        }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black", margin: 5}}>
            User name
        </Text>
        <TouchableOpacity>
            <Image source={require("../../assets/img/categories.png")} style={{ width: 20, height: 20}}/>
        </TouchableOpacity>
        </View>
    );
}

export default AlbumTitle;