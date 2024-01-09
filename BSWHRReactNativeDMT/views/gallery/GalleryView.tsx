import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/MainStackNavigation";
import React from "react";
import { SafeAreaView, View } from "react-native";
import AlbumImageGrid from "../../components/AlbumImagesGrid";
import DI from "../../src/dependencyinjection/ioc";
import { BSTopBar } from "../../components/BSTopBar";
import OverlayExample from "../../components/FullImageViewComponent";

interface Props extends StackScreenProps<RootStackParamList,"GalleryView"> {};
export const GalleryView = ({navigation, route}: Props) => {
  const {
    imagesListData,
    albumTitle,
    getAllImagesCalled,
    setAlbumInformation,
    getAllImagesByAlbumID,
    handleGetAllImagesCalled,
    imageSelected,
    setImageSelected} = DI.resolve("GalleryViewModel")

  React.useEffect(() => {
    if (route.params?.albumData) {
        const {id,title} = route.params.albumData
        getAllImagesByAlbumID(id)
        setAlbumInformation(id,title)
    }
}, [route.params])
    return (
        <SafeAreaView>
        <View>
          <BSTopBar title={getAllImagesCalled ? "All photos" : albumTitle}
          onBackAction={navigation.goBack}
          onOptionsAction={()=>handleGetAllImagesCalled(!getAllImagesCalled)}/>
          <AlbumImageGrid imagesListData={imagesListData} onLongPress={setImageSelected}/>
          <OverlayExample imageUrl={imageSelected} toggleOverlay={setImageSelected}/>
        </View>
      </SafeAreaView>
    );
}
