import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/MainStackNavigation";
import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import AlbumImageGrid from "../../components/AlbumImagesGrid";
import DI from "../../src/dependencyinjection/ioc";
import { AlbumData } from "../../models/AlbumData";
import { BSTopBar } from "../../components/BSTopBar";

interface Props extends StackScreenProps<RootStackParamList,"GalleryView"> {};
export const GalleryView = ({navigation, route}: Props) => {
  const {imagesListData, albumSelected, getAllImagesByAlbumID, handleAlbumSelected, getAllImages} = DI.resolve("GalleryViewModel")
  const albumData = albumSelected as AlbumData
  const [albumTitle, setAlbumTitle] = useState("")
  React.useEffect(() => {
    if (route.params?.albumData) {
        handleAlbumSelected(route.params.data as AlbumData);
        const {id,title,userId} = route.params.albumData
        getAllImagesByAlbumID(id)
        setAlbumTitle(title)
        console.log(id)
    }
}, [route.params])
    return (
        <SafeAreaView>
        <View>
          <BSTopBar title={albumTitle} onBackAction={navigation.goBack} onOptionsAction={getAllImages}/>
          <AlbumImageGrid imagesListData={imagesListData}/>
        </View>
      </SafeAreaView>
    );

    
}

const style = StyleSheet.create({
  mainContainer: {
    flexDirection:"row", 
    backgroundColor:"white", 
    borderBottomColor:"black", 
    borderBottomWidth:1, 
    alignContent: "center", 
    alignItems:"center", justifyContent:"space-between"
  },
  icon: { width: 20, height: 20, marginHorizontal: 10, tintColor:"blue"}
});
