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
        <View style={{padding:10}}>
            <TouchableOpacity onPress={()=>  {getAlbumesListByUser(userData.id.toString()),onElementSelected(elementIndex)}}>
                <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    margin: 1,
                    height: 100,
                    borderRadius: 15,
                    backgroundColor: "#18499d",
                    alignItems: "center",
                    borderColor: "#fdbc15",
                    borderWidth:2,
                }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold", color: "white", margin: 10}}>
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