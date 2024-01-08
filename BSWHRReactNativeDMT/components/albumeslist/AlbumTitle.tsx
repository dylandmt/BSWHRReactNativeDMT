import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AlbumInformation } from "../../models/AlbumInformation";
import { AlbumData } from "../../models/AlbumData";

interface Props {
    albumData : AlbumData
}

const AlbumTitle = ({albumData}:Props) =>{
    return (
        <View
        style={style.mainContainer}>
        <Text style={style.title}>
            {albumData.title +""+ albumData.id}
        </Text>
        <TouchableOpacity onPress={() => {}}>
            <Image source={require("../../assets/img/categories.png")} style={style.icon}/>
        </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    mainContainer:{
        flex: 1,
        flexDirection: "row",
        margin: 1,
        borderBlockColor: "black",
        borderWidth: 1,
        alignItems: "center",
        justifyContent : "space-between"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        margin: 5
    },
    icon: { width: 20, height: 20, marginHorizontal: 10 }
});

export default AlbumTitle;