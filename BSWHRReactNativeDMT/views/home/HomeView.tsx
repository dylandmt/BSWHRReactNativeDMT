import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParamList } from "../../navigation/MainStackNavigation";
import { SafeAreaView, View, Text, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import React from "react";
import HomeStyles from "./HomeStyles";
import UsersList from "../../components/albumeslist/UsersList";
import DI from "../../src/dependencyinjection/ioc";
import { LinearGradient } from "react-native-linear-gradient";

interface Props extends StackScreenProps<RootStackParamList,"HomeView"> {};

export const HomeView = ({navigation, route}: Props) => {
  const {userListData, getUsersList} =  DI.resolve("HomeViewModel")
    getUsersList()
    return (
        <SafeAreaView style={backgroundStyle}>
        <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['white', 'white']}>
          <View>
            <Text style={HomeStyles.loginTitle} >
              Welcome
            </Text>
          </View>
          <UsersList usersData={userListData} navigationManager={navigation}/>
        </LinearGradient>
      </SafeAreaView>
    );
};

const isDarkMode = useColorScheme() === 'dark';

const backgroundStyle = {
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};

