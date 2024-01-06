import React, { useState } from "react";
import { FlatList, View, Image, Dimensions } from "react-native"; 
const AlbumesList = () =>{
    const [albumesData, setAlbumesData] = useState(["1","2","3","4"])
    const {width} = Dimensions.get('window');

    return(
        <FlatList
            data={albumesData}
            renderItem={({ item }) => (
                <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    margin: 1
                }}>
                <Image style={{ width:width*0.3,height: width*0.3, flex:1}} resizeMode="cover" source={require("../assets/img/user_form.png")}/>
                </View>
            )}
            //Setting the number of column
            numColumns={1}
            keyExtractor={(item, index) => index.toString()}
            />
    );
}

export default AlbumesList;