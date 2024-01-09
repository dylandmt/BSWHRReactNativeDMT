import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/MainStackNavigation";
import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import AlbumImageGrid from "../../components/AlbumImagesGrid";
import DI from "../../src/dependencyinjection/ioc";
import { AlbumData } from "../../models/AlbumData";
import { useRoute } from "@react-navigation/native";

interface Props extends StackScreenProps<RootStackParamList,"GalleryView"> {};
export const GalleryView = ({navigation, route}: Props) => {
  const {imagesListData, albumSelected, getAllImagesByAlbumID, handleAlbumSelected} = DI.resolve("GalleryViewModel")

  React.useEffect(() => {
    if (route.params?.albumData) {
        handleAlbumSelected(route.params.data as AlbumData);
        const {id,title,userId} = route.params.albumData
        getAllImagesByAlbumID(id)
        console.log(id)
    }
}, [route.params])
    return (
        <SafeAreaView>
        <View>
          <AlbumImageGrid imagesListData={imagesListData}/>
        </View>
      </SafeAreaView>
    );
}
