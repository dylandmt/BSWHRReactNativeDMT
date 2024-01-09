import React from "react";
import { Text, View, TouchableOpacity} from "react-native";
import AlbumesTitlesList from "./AlbumesTitlesList";
import { UserData } from "../../models/UserData";
import DI from "../../src/dependencyinjection/ioc";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/MainStackNavigation";

interface Props {
    userData:UserData,
    elementIndex:number,
    onElementSelected:(index:number) => void,
    navigationManager : StackNavigationProp<RootStackParamList>
}
const UserItem = ({userData,elementIndex,onElementSelected,navigationManager}:Props) =>{
    const {albumesListData,getAlbumesListByUser} =  DI.resolve("HomeViewModel")
    return (
        <View>
            <TouchableOpacity onPress={()=>  {getAlbumesListByUser(userData.id.toString()),onElementSelected(elementIndex)}}>
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
            { albumesListData ? <AlbumesTitlesList
             albumesData={albumesListData}
             navigationManager={navigationManager}/> : undefined}
        </View>
    );
}

export default UserItem;