import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, Image } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import InstructionScreen from './screens/InstructionScreen';
import AuthorsScreen from './screens/AuthorsScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{drawerStyle: {backgroundColor: '#c6cbef', width: 200},}} >
        <Drawer.Screen name="Home" component={HomeScreen} options={{headerStyle: {backgroundColor: '#f4511e',},
        headerTintColor: '#fff', headerTitleAlign:'center', headerTitleStyle: {fontWeight: 'bold',},}} />
        <Drawer.Screen name="Game" component={GameScreen} options={{headerStyle: {backgroundColor: '#f4511e',},
        headerTintColor: '#fff', headerTitleAlign:'center', headerTitleStyle: {fontWeight: 'bold',},}} />
        <Drawer.Screen name="Instruction" component={InstructionScreen} options={{headerStyle: {backgroundColor: '#f4511e',},
        headerTintColor: '#fff', headerTitleAlign:'center', headerTitleStyle: {fontWeight: 'bold',},}} />
        <Drawer.Screen name="Authors" component={AuthorsScreen} options={{headerStyle: {backgroundColor: '#f4511e',},
        headerTintColor: '#fff', headerTitleAlign:'center', headerTitleStyle: {fontWeight: 'bold',},}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}