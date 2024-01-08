import React from "react";
import { FlatList } from "react-native";
import UserItem from "./UserItem";
import { UserInformation } from "../../models/UserInformation";
import { AlbumInformation } from "../../models/AlbumInformation";
import { UserData } from "../../models/UserData";
import { AlbumData } from "../../models/AlbumData";

interface Props {
    usersData:UserData[]
}
const UsersList = ({usersData} : Props) =>{
    return(
        <FlatList
        style={{ marginBottom: 100}}
            data={usersData}
            renderItem={({ item }) => ( <UserItem userData={item}/> )}
            keyExtractor={(item, index) => index.toString()}/>
    );
}

export default UsersList;