import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import { Overlay } from 'react-native-elements';


interface Props {
    imageUrl:string,
    toggleOverlay:(imageUrl:string) => void
}
const OverlayExample = ({imageUrl,toggleOverlay}:Props) => {
const {width} = Dimensions.get('window');
  return (
    <View>
      <Overlay isVisible={imageUrl !==""? true : false} onBackdropPress={()=>toggleOverlay("")}>
      <View>
        <Image style={{ width:width*0.8, height:width * 0.8}} source={{uri:imageUrl}}/>
        </View>
      </Overlay>
    </View>
  );
};

export default OverlayExample