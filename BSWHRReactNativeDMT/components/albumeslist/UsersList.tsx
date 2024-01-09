import React from "react";
import { FlatList } from "react-native";
import UserItem from "./UserItem";
import { UserData } from "../../models/UserData";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/MainStackNavigation";

interface Props {
    usersData:UserData[],
    navigationManager : StackNavigationProp<RootStackParamList>
}
const UsersList = ({usersData,navigationManager} : Props) =>{
    return(
        <FlatList
        style={{ marginBottom: 100}}
            data={usersData}
            renderItem={({ item }) => (
            <UserItem userData={item}
                navigationManager={navigationManager}/> )}
            keyExtractor={(item, index) => index.toString()}/>
    );
}

export default UsersList;