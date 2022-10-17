import { useState } from 'react';
import { StyleSheet, ScrollView, View, Button, TextInput, Text } from 'react-native';

export default function App() {
  const[myTextInput, setMyTextInput] = useState("")
  const[alphabet, setAlphabet] = useState(['a', 'b', 'c', 'd'])
  const onChangeInput = (event) => {
    console.log("event", event)
    setMyTextInput(event)
  }
  const onAddTextInput = () => {
    setAlphabet([...alphabet, myTextInput])
  }
  return(
    <View>
      <TextInput
        style={styles.input}
        value={myTextInput}
        onChangeText={onChangeInput}
        multiline={true}
        editable={true}
        ></TextInput>
        <Button title= "Add Text Input"
        onPress = {onAddTextInput}></Button>
        <ScrollView style = {{width:"100%"}}>
          {alphabet.map((item, idx)=>(
            <Text 
              style={styles.mainText}
            >{item}</Text>  
          ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: "100%",
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input:{
    width: "100%",
    backgroundColor: "#cecece",
    fontSize: 25,
    padding: 10
  },
  mainText: {
    fontSize: 20,
    color: "red",
    padding: 20,
    margin: 20,
    backgroundColor: 'pink'
  }
});