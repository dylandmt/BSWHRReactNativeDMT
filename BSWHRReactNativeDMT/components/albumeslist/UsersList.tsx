import React from "react";
import { FlatList } from "react-native";
import UserItem from "./UserItem";
import { UserInformation } from "../../models/UserInformation";
import { AlbumInformation } from "../../models/AlbumInformation";
import { UserData } from "../../models/UserData";
import { AlbumData } from "../../models/AlbumData";

interface Props {
    usersData:UserData[],
    albumesData:AlbumData[],
    onAlbumSelected: (albumSelected:AlbumData) => void
    onUserSelected: (userId:string) => void
}
const UsersList = ({usersData,albumesData,onAlbumSelected,onUserSelected} : Props) =>{
    return(
        <FlatList
        style={{ marginBottom: 100}}
            data={usersData}
            renderItem={({ item }) => ( <UserItem userData={item}
                albumesData={albumesData}
                onUserSelected={onUserSelected}
                onAlbumSelected={onAlbumSelected}/> )}
            keyExtractor={(item, index) => index.toString()}/>
    );
}

export default UsersList;