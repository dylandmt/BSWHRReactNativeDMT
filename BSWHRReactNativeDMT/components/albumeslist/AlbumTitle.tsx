import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AlbumInformation } from "../../models/AlbumInformation";
import { AlbumData } from "../../models/AlbumData";
import DI from "../../src/dependencyinjection/ioc";

interface Props {
    albumData : AlbumData,
    handleAlbumRemoved : (albumdata : AlbumData) => void,
    onAlbumSelected: () => void
}

const AlbumTitle = ({albumData, handleAlbumRemoved,onAlbumSelected}:Props) =>{
    return (
        <View
        style={style.mainContainer}>
            <TouchableOpacity onPress={()=>onAlbumSelected()}>
                <Text style={style.title}>
                {albumData.title +""+ albumData.id}
                </Text>
            </TouchableOpacity>
        <TouchableOpacity onPress={() => {handleAlbumRemoved(albumData)}}>
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