import React from "react";
import { FlatList } from "react-native";
import UserItem from "./UserItem";
import { UserInformation } from "../../models/UserInformation";
import { AlbumInformation } from "../../models/AlbumInformation";
import { UserData } from "../../models/UserData";
import { AlbumData } from "../../models/AlbumData";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/MainStackNavigation";

interface Props {
    usersData:UserData[],
    navigationManager : StackNavigationProp<RootStackParamList>,
    handleAlbumRemoved : (albumdata : AlbumData) => void
}
const UsersList = ({usersData,navigationManager,handleAlbumRemoved} : Props) =>{
    return(
        <FlatList
        style={{ marginBottom: 100}}
            data={usersData}
            renderItem={({ item }) => (
            <UserItem userData={item}
                navigationManager={navigationManager}
                handleAlbumRemoved={handleAlbumRemoved}/> )}
            keyExtractor={(item, index) => index.toString()}/>
    );
}

export default UsersList;