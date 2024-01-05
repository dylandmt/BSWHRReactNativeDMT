import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParamList } from "../../navigation/MainStackNavigation";
import { SafeAreaView, View, Text, Image, StyleSheet, useColorScheme } from "react-native";
import { BSButton } from "../../components/BSButton";
import { BSTextInput } from "../../components/BSTextInput";
import { Colors } from "react-native/Libraries/NewAppScreen";
import LoginViewModel from "../../viewmodels/LoginViewModel";
import React from "react";
import LoginStyle from "./LoginStyle";

interface Props extends StackScreenProps<RootStackParamList,"LoginView"> {}; 

export const LoginView = ({navigation, route}: Props) => {
    const {email, password, handleCredentialChange} = LoginViewModel()
    return (
        <SafeAreaView style={backgroundStyle}>
        <View>
          <Text style={LoginStyle.loginTitle}>
            Log in
          </Text>
          <Image source={ require("../../assets/img/user.png")} style={LoginStyle.loginImage}/>
          <BSTextInput placeHolder='Enter the user' property="email" value={email} onChangeText={handleCredentialChange}/>
          <BSTextInput placeHolder='Enter the password' property="password" value={password} onChangeText={handleCredentialChange}/>
          <BSButton text='Login' onPress={() =>  navigation.navigate("HomeView")}/>
          <Text style={LoginStyle.textRegister}>REGISTRATE AHORA</Text>
        </View>
      </SafeAreaView>
    );
};

const isDarkMode = useColorScheme() === 'dark';

const backgroundStyle = {
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};
