import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import PropsChild from './propsChild';

export default function App() {
  const[state, setState] = useState({
    sampleText: 'Hello',
    sampleBoolean: true
  })
  const changeState = () => {
    if(state.sampleBoolean) {
      setState({sampleText: 'hi', sampleBoolean: false})
    }else{
      setState({sampleText: 'Hello', sampleBoolean: true})
    }
  }
  
  return (
    <View>
      <PropsChild sText = {state.sampleText} cState = {changeState}/>
    </View>
    /*
    <View style = {styles.mainView}>
      <View style = {styles.subView}>
        <Text>Hello World</Text>
      </View>

      <View style = {styles.anotherView}>
        <Text style = {styles.mainText}> Hello World</Text>
      </View>
    </View>
    */
  );
}

const styles = StyleSheet.create({
  mainView:{
    backgroundColor: 'green',
    flex: 1,
    height:'100%',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView:{
    backgroundColor:'yellow',
    marginBottom: 10,
    flex: 1
  },
  anotherView:{
    backgroundColor: 'yellow',
    flex: 1,
    width:'100%',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    padding: 20
  }
});
