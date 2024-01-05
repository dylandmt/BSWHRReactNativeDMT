import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParamList } from "../../navigation/MainStackNavigation";
import { SafeAreaView, View, Text, Image, StyleSheet, useColorScheme, ToastAndroid } from "react-native";
import { BSButton } from "../../components/BSButton";
import { BSTextInput } from "../../components/BSTextInput";
import { Colors } from "react-native/Libraries/NewAppScreen";
import LoginViewModel from "../../viewmodels/LoginViewModel";
import React, { useEffect, useState } from "react";
import LoginStyle from "./LoginStyle";

interface Props extends StackScreenProps<RootStackParamList,"LoginView"> {}; 

export const LoginView = ({navigation, route}: Props) => {
    const {email, password, error, onChange, tryToLogin,setError} = LoginViewModel()

    useEffect(() => {
      if(error!==""){
        ToastAndroid.show(error,ToastAndroid.SHORT)
      }
      setError("")
    }, [error])
    
    return (
        <SafeAreaView style={backgroundStyle}>
        <View>
          <Text style={LoginStyle.loginTitle}>
            Log in
          </Text>
          <Image source={ require("../../assets/img/user.png")} style={LoginStyle.loginImage}/>
          <BSTextInput placeHolder='User email' prop="email" value={email} onChangeText={ onChange }/>
          <BSTextInput placeHolder='Password' prop="password" value={password} onChangeText={ onChange }/>
          <BSButton text='Login' onPress={ tryToLogin}/>
          <Text style={LoginStyle.textRegister}>REGISTRATE AHORA</Text>
        </View>
      </SafeAreaView>
    );
};
//navigation.navigate("HomeView")
const isDarkMode = useColorScheme() === 'dark';

const backgroundStyle = {
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};
