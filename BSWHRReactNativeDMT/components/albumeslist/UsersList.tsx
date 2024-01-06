import React from "react";
import { FlatList } from "react-native";
import UserItem from "./UserItem";
import { UserInformation } from "../../models/UserInformation";

interface Props {
    usersData:UserInformation[]
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