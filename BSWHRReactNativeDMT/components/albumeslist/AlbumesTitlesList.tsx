import React, { useState } from "react";
import { FlatList } from "react-native";
import AlbumTitle from "./AlbumTitle";
import { AlbumData } from "../../models/AlbumData";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/MainStackNavigation";

interface Props {
    albumesData:AlbumData [],
    navigationManager : StackNavigationProp<RootStackParamList>
}
const AlbumesTitlesList = ({albumesData,navigationManager}: Props) =>{

    const [albumes, setSetAlbumes] = useState(albumesData)

    const removeItem = (albumToRemove:AlbumData) => {
        const albumesFiltered = albumes.filter(album => album.id!==albumToRemove.id)
        setSetAlbumes(albumesFiltered)
    }
    return(
        <FlatList
            data={albumes}
            renderItem={({ item }) => ( 
            <AlbumTitle albumData={item}
                navigationManager={navigationManager}
                handleAlbumRemoved={removeItem}/>
                )}
            keyExtractor={(item, index) => index.toString()}
            style={{ marginLeft:20, marginBottom: 20}}
            />
    );
}

export default AlbumesTitlesList;