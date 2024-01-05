import React from "react";
import { KeyboardType, StyleSheet, Text, TextInput } from "react-native";

interface Props {
    placeHolder: string,
    prop:string,
    value: string,
    keyBoardType?: KeyboardType,
    secureTextEntry?: boolean,
    onChangeText: (prop:string, value:any) => void
}

export const BSTextInput  = ({
    placeHolder,
    prop,
    value,
    keyBoardType = "default",
    secureTextEntry = false,
    onChangeText
}: Props) => {
    return(
        <TextInput placeholder={placeHolder}
        autoCapitalize="none"
        style={style.textInput}
        value={value}
        keyboardType={ keyBoardType }
        secureTextEntry={ secureTextEntry }
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