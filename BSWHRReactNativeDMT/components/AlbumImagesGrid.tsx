import React, { useState } from "react";
import { FlatList, View, Image, Dimensions } from "react-native"; 
import { ImageInformation } from "../models/ImageInformation";


interface Props {
    imagesListData:ImageInformation[]
}
const AlbumImageGrid = ({imagesListData}:Props) => {
    const {width} = Dimensions.get('window');
    return(
        <FlatList
            data={imagesListData}
            renderItem={({ item }) => (
                <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    margin: 1
                }}>
                <Image style={{ width:width*0.3,height: width*0.3, flex:1}} resizeMode="cover" source={{uri:item.url}}/>
                </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            />
    );
}
export default AlbumImageGrid;