import React from "react";
import { FlatList, View, Image, Dimensions, Pressable } from "react-native"; 
import { ImageInformation } from "../models/ImageInformation";


interface Props {
    imagesListData:ImageInformation[],
    onLongPress:(imageUrl:string) => void
}
const AlbumImageGrid  = ({imagesListData,onLongPress}:Props) => {
    const {width} = Dimensions.get('window');
    return(
        <FlatList
            data={imagesListData}
            renderItem={({ item }) => (
                <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    margin: 1,
                    width:width*0.3,height: width*0.3,
                    alignContent:"center",
                    alignItems:"center"
                }}>
                    <Pressable onLongPress={()=>onLongPress(item.url)}>
                        <View style={{width:width*0.3,height: width*0.3,}}>
                            <Image style={{ flex:1, borderRadius:15}} 
                                resizeMode="cover"
                                source={{uri:item.url}}/>
                        </View>
                    </Pressable>
                    
                </View>
            )}
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            />
    );
}
export default AlbumImageGrid;