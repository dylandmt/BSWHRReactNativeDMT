import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParamList } from "../../navigation/MainStackNavigation";
import { SafeAreaView, View, Text, Image, useColorScheme, ToastAndroid } from "react-native";
import { BSButton } from "../../components/BSButton";
import { BSTextInput } from "../../components/BSTextInput";
import { Colors } from "react-native/Libraries/NewAppScreen";
import React, { useEffect } from "react";
import LoginStyle from "./LoginStyle";
import DI from "../../src/dependencyinjection/ioc";
import { GeneralError, Succes } from "../../src/domain/utils/Resource";

interface Props extends StackScreenProps<RootStackParamList,"LoginView"> {}; 

export const LoginView = ({navigation, route}: Props) => {
  const {email, password, error, onChange, tryToLogin,setError} = DI.resolve("LoginViewModel")

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
          <BSTextInput placeHolder='Password' prop="password" value={password} onChangeText={ onChange } secureTextEntry={true}/>
          <BSButton text='Login' onPress={ tryToLogin }/>
          <Text style={LoginStyle.textRegister}>REGISTRATE AHORA</Text>
        </View>
      </SafeAreaView>
    );
};
const isDarkMode = useColorScheme() === 'dark';

const backgroundStyle = {
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};
