import React, { useState } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import AlbumTitle from "./AlbumTitle";
import { UserInformation } from "../../models/UserInformation";
import { AlbumInformation } from "../../models/AlbumInformation";

interface Props {
    albumesData:AlbumInformation [],
    onAlbumSelected: (albumSelected:AlbumInformation) => void
}
const AlbumesTitlesList = ({albumesData,onAlbumSelected}: Props) =>{
    return(
        <FlatList
            data={albumesData}
            renderItem={({ item }) => ( <AlbumTitle albumData={item} onAlbumSelected={onAlbumSelected}/> )}
            keyExtractor={(item, index) => index.toString()}
            style={{ marginLeft:20, marginBottom: 20}}
            />
    );
}

export default AlbumesTitlesList;