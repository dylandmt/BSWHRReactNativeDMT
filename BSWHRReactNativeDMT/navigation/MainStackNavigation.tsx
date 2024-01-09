import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeView } from "../views/home/HomeView";
import { LoginView } from "../views/login/LoginView";
import { GalleryView } from "../views/gallery/GalleryView";
import React from "react";
export type RootStackParamList = {
    HomeView : any,
    LoginView : any,
    GalleryView: any
}

const Stack  =  createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
   return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeView" component={HomeView}/>
        <Stack.Screen name="GalleryView" component={GalleryView}/>
        <Stack.Screen name="LoginView" component={LoginView}/>
    </Stack.Navigator>
   );
}