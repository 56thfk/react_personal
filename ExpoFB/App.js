import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import User from './Screens/User';
import Signup from './Screens/Signup';

const Stack = createStackNavigator();

export default function App() {
  const logoTitle = () => {
    return(
      <Image
        style={{width:40, height:40}}
        source={require('./assets/favicon.png')}
      />
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signup'>
        <Stack.Screen name = "Home" component={Home} 
          options={{title: 'Home Screen',
          headerTitle:logoTitle,
          headerRight:()=> (
            <Button
              title='Info'
              onPress={()=>alert("Button")}
            />
            )}}/>
        <Stack.Screen name = "Signup" component={Signup} 
          options={{title: 'Signup Screen', 
          headerStyle:{backgroundColor:'white'},
          headerTintColor:'red',
          headerTitleStyle:{
            fontWeight: 'bold',
            color: 'purple',
            fontSize: 50
          }}}
          initialParams={{
            userIdx: 50,
            userName: 'SeongYeon',
            userLastName: 'Won'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
