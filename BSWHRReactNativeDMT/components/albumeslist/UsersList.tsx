import React, { useState } from "react";
import { FlatList, View, Image, Dimensions } from "react-native";
import UserItem from "./UserItem";
const UsersList = () =>{
    const [albumesData, setAlbumesData] = useState(["1","2","3","4"])
    return(
        <FlatList
            data={albumesData}
            renderItem={({ item }) => ( <UserItem/> )}
            keyExtractor={(item, index) => index.toString()}/>
    );
}

export default UsersList;