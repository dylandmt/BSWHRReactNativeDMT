import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParamList } from "../../navigation/MainStackNavigation";
import { SafeAreaView, View, Text, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import React from "react";
import HomeStyles from "./HomeStyles";

interface Props extends StackScreenProps<RootStackParamList,"HomeView"> {};

export const HomeView = ({navigation, route}: Props) => {
    return (
        <SafeAreaView style={backgroundStyle}>
        <View>
          <Text style={HomeStyles.loginTitle}>
            Home View
          </Text>
        </View>
      </SafeAreaView>
    );
};

const isDarkMode = useColorScheme() === 'dark';

const backgroundStyle = {
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};

