import { Button } from "react-native";

export default function BSButton({label , onClickEvent }) {
    return (
        <Button onPress={onClickEvent} title={label}/>
    );
}