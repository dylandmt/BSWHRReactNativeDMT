import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/MainStackNavigation";
import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import AlbumImageGrid from "../../components/AlbumImagesGrid";

interface Props extends StackScreenProps<RootStackParamList,"GalleryView"> {};
export const GalleryView = ({navigation, route}: Props) => {

    return (
        <SafeAreaView>
        <View>
          <AlbumImageGrid/>
        </View>
      </SafeAreaView>
    );
}
