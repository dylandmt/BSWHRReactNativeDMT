/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format  
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './navigation/MainStackNavigation';

function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
}
export default App;
