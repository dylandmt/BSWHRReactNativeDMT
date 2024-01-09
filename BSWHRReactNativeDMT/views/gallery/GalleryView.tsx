import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/MainStackNavigation";
import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import AlbumImageGrid from "../../components/AlbumImagesGrid";
import DI from "../../src/dependencyinjection/ioc";
import { BSTopBar } from "../../components/BSTopBar";

interface Props extends StackScreenProps<RootStackParamList,"GalleryView"> {};
export const GalleryView = ({navigation, route}: Props) => {
  const {imagesListData, getAllImagesByAlbumID, getAllImages} = DI.resolve("GalleryViewModel")
  const [albumTitle, setAlbumTitle] = useState("")
  React.useEffect(() => {
    if (route.params?.albumData) {
        const {id,title} = route.params.albumData
        getAllImagesByAlbumID(id)
        setAlbumTitle(title)
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
