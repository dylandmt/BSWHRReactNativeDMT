import React, { useState } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import AlbumTitle from "./AlbumTitle";
import { UserInformation } from "../../models/UserInformation";
import { AlbumInformation } from "../../models/AlbumInformation";
import { AlbumData } from "../../models/AlbumData";

interface Props {
    albumesData:AlbumData [],
    handleAlbumRemoved : (albumdata : AlbumData) => void,
    onAlbumSelected :  () => void
}
const AlbumesTitlesList = ({albumesData,handleAlbumRemoved,onAlbumSelected}: Props) =>{
    return(
        <FlatList
            data={albumesData}
            renderItem={({ item }) => ( <AlbumTitle albumData={item} onAlbumSelected={onAlbumSelected} handleAlbumRemoved={handleAlbumRemoved}/> )}
            keyExtractor={(item, index) => index.toString()}
            style={{ marginLeft:20, marginBottom: 20}}
            />
    );
}

export default AlbumesTitlesList;