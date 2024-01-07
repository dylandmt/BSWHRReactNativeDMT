import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParamList } from "../../navigation/MainStackNavigation";
import { SafeAreaView, View, Text, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import React, { useState } from "react";
import HomeStyles from "./HomeStyles";
import UsersList from "../../components/albumeslist/UsersList";
import { UserInformation } from "../../models/UserInformation";
import { TouchableOpacity } from "react-native";

interface Props extends StackScreenProps<RootStackParamList,"HomeView"> {};

export const HomeView = ({navigation, route}: Props) => {

  const usersData : UserInformation[] = [
    {
      name : "Juan",
      albumes: ["1","2","3"]
    },
    {
      name : "Pedro",
      albumes: ["1","2","3"]
    },
    {
      name : "Pablo",
      albumes: ["1","2","3"]
    },
    {
      name : "Carnal",
      albumes: ["1","2","3","4"]
    },
    {
      name : "Hermano",
      albumes: ["1","2"]
    },
  ]

  const [usersDataState, setUsersDataState] = useState(usersData)


  function handleRemove(name:string, albumId:string) {
    const userFiltered:UserInformation = usersData.find((userData) => userData.name === name) as UserInformation
    const listUpdated = userFiltered.albumes.filter((album) => album!==albumId)
    const userDataUpdated = usersDataState.map(userData =>  userData.name === name?{...userData,"albumes":listUpdated}:userData)
    setUsersDataState(userDataUpdated)
  }
    return (
        <SafeAreaView style={backgroundStyle}>
        <View>
          <Text style={HomeStyles.loginTitle}>
            Home View
          </Text>
          <TouchableOpacity onPress={() => handleRemove("Hermano","1")}>
            <Text>Click me</Text>
          </TouchableOpacity>
        </View>
        <UsersList usersData={usersDataState}/>
      </SafeAreaView>
    );
};

const isDarkMode = useColorScheme() === 'dark';

const backgroundStyle = {
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};

