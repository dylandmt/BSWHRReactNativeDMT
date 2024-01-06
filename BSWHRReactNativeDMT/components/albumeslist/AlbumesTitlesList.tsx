import React, { useState } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import AlbumTitle from "./AlbumTitle";
const AlbumesTitlesList = () =>{
    const [albumesData, setAlbumesData] = useState(["1","2","3","4"])
    const {width} = Dimensions.get('window');

    return(
        <FlatList
            data={albumesData}
            renderItem={({ item }) => ( <AlbumTitle/> )}
            keyExtractor={(item, index) => index.toString()}
            />
    );
}

export default AlbumesTitlesList;