import { StyleSheet, TextInput } from "react-native";

interface Props {
    placeHolder: string,
    property:string,
    value: string,
    onChangeText: (property:string, value:any) => void
}

export const BSTextInput  = ({placeHolder, property, value, onChangeText}: Props) => {
    return(
        <TextInput placeholder={placeHolder}
        style={style.textInput}
        value={value}
        onChange={() => onChangeText(property,value)}
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