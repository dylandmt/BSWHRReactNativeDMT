import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParamList } from "../../navigation/MainStackNavigation";
import { SafeAreaView, View, Text, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import React, { useState } from "react";
import HomeStyles from "./HomeStyles";
import UsersList from "../../components/albumeslist/UsersList";
import { UserInformation } from "../../models/UserInformation";

interface Props extends StackScreenProps<RootStackParamList,"HomeView"> {};

export const HomeView = ({navigation, route}: Props) => {

  const usersData : UserInformation[] = [
    {
      name : "Juan",
      albumes: ["1","2","3"]
    },
    {
      name : "Juan",
      albumes: ["1","2","3"]
    },
    {
      name : "Juan",
      albumes: ["1","2","3"]
    },
    {
      name : "Pedro",
      albumes: ["1","2","3","4"]
    },
    {
      name : "Pedro",
      albumes: ["1","2"]
    },
  ]

    return (
        <SafeAreaView style={backgroundStyle}>
        <View>
          <Text style={HomeStyles.loginTitle}>
            Home View
          </Text>
        </View>
        <UsersList usersData={usersData}/>
      </SafeAreaView>
    );
};

const isDarkMode = useColorScheme() === 'dark';

const backgroundStyle = {
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};

