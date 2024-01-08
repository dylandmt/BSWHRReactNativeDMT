import React, { useState } from "react";
import { Dimensions, Image, Text, View, TouchableOpacity} from "react-native";
import AlbumesTitlesList from "./AlbumesTitlesList";
import { UserInformation } from "../../models/UserInformation";
import { AlbumInformation } from "../../models/AlbumInformation";
import { UserData } from "../../models/UserData";
import { AlbumData } from "../../models/AlbumData";

interface Props {
    userData:UserData,
    albumesData:AlbumData[],
    onAlbumSelected: (albumSelected:AlbumData) => void,
    onUserSelected: (userId:string) => void
}
const UserItem = ({userData,albumesData,onAlbumSelected,onUserSelected}:Props) =>{
    const [showAlbumesTitlesList, setShowAlbumesTitlesList] = useState(false)
    return (
        <View>
            <TouchableOpacity onPress={()=> onUserSelected(userData.id.toString())}>
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
            {showAlbumesTitlesList ? <AlbumesTitlesList albumesData={albumesData} onAlbumSelected={onAlbumSelected}/> : undefined}
        </View>
    );
}

export default UserItem;