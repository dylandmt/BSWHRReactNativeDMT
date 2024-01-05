/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import BSButton from './components/BSButton';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text style={styles.loginTitle}>
          Log in
        </Text>
        <Image source={ require("./assets/img/user.png")} style={styles.loginImage}/>
        <TextInput placeholder='Enter the user' style={styles.textInput}/>
        <TextInput placeholder='Enter the password' style={styles.textInput}/>
        <TouchableOpacity onPress={()=>{}} style={styles.button}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.textRegister}>REGISTRATE AHORA</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginTitle: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 20
  },
  loginImage: {
    height: 200,
    width: 200
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    fontSize: 18,
    marginVertical: 10
  },
  button: {
    backgroundColor: "blue",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "white",
    fontSize: 19
  },
  textRegister: {
    fontSize: 16,
    textAlign: "center",
    margin: 10
  }
});
export default App;
