import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppTheme } from "../src/presentation/AppTheme";

interface Props {
    text: string,
    onPress: () => void
}
export const BSButton = ({text, onPress}: Props) => {
    return (
        <TouchableOpacity onPress={()=>onPress()} style={style.button}>
          <Text style={style.textButton}>{text}</Text>
        </TouchableOpacity>
    );
}


const style = StyleSheet.create({
    button: {
      backgroundColor: AppTheme.background,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 20,
      borderRadius: 15
    },
    textButton: {
      color: "white",
      fontSize: 19
    }
  });