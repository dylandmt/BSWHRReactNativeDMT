import React, { useState } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import AlbumTitle from "./AlbumTitle";

interface Props {
    albumsData : string[]
}
const AlbumesTitlesList = ({albumsData}: Props) =>{
    return(
        <FlatList
            data={albumsData}
            renderItem={({ item }) => ( <AlbumTitle title={item}/> )}
            keyExtractor={(item, index) => index.toString()}
            style={{ marginLeft:20, marginBottom: 20}}
            />
    );
}

export default AlbumesTitlesList;