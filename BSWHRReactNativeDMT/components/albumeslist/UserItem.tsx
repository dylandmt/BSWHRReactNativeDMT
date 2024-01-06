import React, { useState } from "react";
import { Dimensions, Image, Text, View, TouchableOpacity} from "react-native";
import AlbumesTitlesList from "./AlbumesTitlesList";
import { UserInformation } from "../../models/UserInformation";

interface Props {
    userData:UserInformation
}
const UserItem = ({userData}:Props) =>{
    const [showAlbumesTitlesList, setShowAlbumesTitlesList] = useState(false)
    return (
        <View>
            <TouchableOpacity onPress={()=> setShowAlbumesTitlesList(!showAlbumesTitlesList)}>
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
                        User name {userData.name}
                    </Text>
                </View>
            </TouchableOpacity>
            {showAlbumesTitlesList ? <AlbumesTitlesList albumsData={userData.albumes}/> : undefined}
        </View>
    );
}

export default UserItem;