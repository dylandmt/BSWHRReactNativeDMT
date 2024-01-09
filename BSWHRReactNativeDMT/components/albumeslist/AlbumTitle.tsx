import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AlbumInformation } from "../../models/AlbumInformation";
import { AlbumData } from "../../models/AlbumData";
import DI from "../../src/dependencyinjection/ioc";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/MainStackNavigation";

interface Props {
    albumData : AlbumData,
    navigationManager : StackNavigationProp<RootStackParamList>,
    handleAlbumRemoved : (albumdata : AlbumData) => void
}

const AlbumTitle = ({albumData,navigationManager, handleAlbumRemoved}:Props) =>{

    return (
        <View style={style.mainContainer}>
            <View style={{flex:1}}>
            <TouchableOpacity onPress={()=>{navigationManager.navigate("GalleryView",{albumData})}}>
                <Text style={style.title}>
                {albumData.title +""+ albumData.id}
                </Text>
            </TouchableOpacity>
            </View>
            <View> 
                <TouchableOpacity onPress={() => {handleAlbumRemoved(albumData)}}>
                    <Image source={require("../../assets/img/trash.png")} style={style.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    mainContainer: {
      flexDirection:"row", 
      backgroundColor:"white", 
      borderBottomColor:"black", 
      borderWidth:1, 
      alignContent: "center", 
      alignItems:"center", justifyContent:"space-between"
    },
    title : {
        width:"auto", 
        flexWrap:"wrap", 
        textAlign:"left", 
        marginVertical:10,
        marginLeft: 10, 
        color:"black", 
        fontWeight:"bold",
        flex:1
    },
    icon:{ width:25, height:25, margin:10}
  });
  

export default AlbumTitle;