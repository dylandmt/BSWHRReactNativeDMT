import React, { useState } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import AlbumTitle from "./AlbumTitle";
import { UserInformation } from "../../models/UserInformation";
import { AlbumInformation } from "../../models/AlbumInformation";
import { AlbumData } from "../../models/AlbumData";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/MainStackNavigation";

interface Props {
    albumesData:AlbumData [],
    navigationManager : StackNavigationProp<RootStackParamList>,
    handleAlbumRemoved : (albumdata : AlbumData) => void
}
const AlbumesTitlesList = ({albumesData,navigationManager, handleAlbumRemoved}: Props) =>{
    return(
        <FlatList
            data={albumesData}
            renderItem={({ item }) => ( <AlbumTitle albumData={item} navigationManager={navigationManager} handleAlbumRemoved={handleAlbumRemoved}/> )}
            keyExtractor={(item, index) => index.toString()}
            style={{ marginLeft:20, marginBottom: 20}}
            />
    );
}

export default AlbumesTitlesList;