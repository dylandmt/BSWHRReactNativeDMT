import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

interface Props {
    title:string,
    onBackAction: () => void,
    onOptionsAction: () => void
}


export const BSTopBar = ({title,onBackAction,onOptionsAction}:Props) => {
    return(
        <View>
        <View style={style.mainContainer}>
          <TouchableOpacity onPress={()=>{onBackAction()}}>
            <Image source={require("../assets/img/left-arrow.png")} style={style.icon}/>
          </TouchableOpacity>
          <Text style={style.title}>{title}</Text>
          <TouchableOpacity onPress={()=>{onOptionsAction()}}>
            <Image source={require("../assets/img/categories.png")} style={style.icon}/>
          </TouchableOpacity>
        </View>
      </View>
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
    title : {
        width:"auto", 
        flexWrap:"wrap", 
        textAlign:"center", 
        marginVertical:10, 
        color:"black", 
        fontWeight:"bold"
    },
    icon: { width: 20, height: 20, marginHorizontal: 10, tintColor:"#fa8072"}
  });
  