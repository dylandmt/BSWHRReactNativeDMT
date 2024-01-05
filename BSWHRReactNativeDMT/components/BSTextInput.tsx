import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

interface Props {
    placeHolder: string,
    prop:string,
    value: string,
    onChangeText: (prop:string, value:any) => void
}

export const BSTextInput  = ({
    placeHolder,
    prop,
    value,
    onChangeText
}: Props) => {
    return(
        <TextInput placeholder={placeHolder}
        style={style.textInput}
        value={value}
        onChangeText={text => onChangeText(prop,text)}
        />
    );
}

const style = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: 20
      },
});