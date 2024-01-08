import React from "react";
import { FlatList } from "react-native";
import UserItem from "./UserItem";
import { UserInformation } from "../../models/UserInformation";
import { AlbumInformation } from "../../models/AlbumInformation";

interface Props {
    usersData:UserInformation[],
    onAlbumSelected: (albumSelected:AlbumInformation) => void
}
const UsersList = ({usersData,onAlbumSelected} : Props) =>{
    return(
        <FlatList
        style={{ marginBottom: 100}}
            data={usersData}
            renderItem={({ item }) => ( <UserItem userData={item} onAlbumSelected={onAlbumSelected}/> )}
            keyExtractor={(item, index) => index.toString()}/>
    );
}

export default UsersList;