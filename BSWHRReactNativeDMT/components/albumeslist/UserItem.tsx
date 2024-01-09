import React, { useState } from "react";
import { Dimensions, Image, Text, View, TouchableOpacity} from "react-native";
import AlbumesTitlesList from "./AlbumesTitlesList";
import { UserInformation } from "../../models/UserInformation";
import { AlbumInformation } from "../../models/AlbumInformation";
import { UserData } from "../../models/UserData";
import { AlbumData } from "../../models/AlbumData";
import DI from "../../src/dependencyinjection/ioc";

interface Props {
    userData:UserData,
    handleAlbumRemoved : (albumdata : AlbumData) => void,
    onAlbumSelected :  () => void
}
const UserItem = ({userData,handleAlbumRemoved,onAlbumSelected}:Props) =>{
    const {albumesListData,getAlbumesListByUser} =  DI.resolve("HomeViewModel")
    return (
        <View>
            <TouchableOpacity onPress={()=>  getAlbumesListByUser(userData.id.toString())}>
                <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    margin: 1,
                    height: 100,
                    borderBlockColor: "black",
                    borderWidth: 1,
                    alignItems: "center"
                }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold", color: "black", margin: 10}}>
                        {userData.username}
                    </Text>
                </View>
            </TouchableOpacity>
            { albumesListData ? <AlbumesTitlesList albumesData={albumesListData} onAlbumSelected={onAlbumSelected}handleAlbumRemoved={handleAlbumRemoved}/> : undefined}
        </View>
    );
}

export default UserItem;