import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screen/Home';
import User from './Screen/User';


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
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name = "Home" component={Home} 
          options={{title: 'Home Screen',
          headerTitle:logoTitle,
          headerRight:()=> (
            <Button
              title='Info'
              onPress={()=>alert("Button")}
            />
            )}}/>
        <Stack.Screen name = "User" component={User} 
          options={{title: 'User Screen', 
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
