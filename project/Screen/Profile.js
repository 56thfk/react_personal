import React from 'react'
import { SafeAreaView, View, StyleSheet, Button, TextInput, Text} from 'react-native';

const Profile = (props) => {
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);
    const [age, setAge] = React.useState(0);

    return (
        <SafeAreaView style={{
            flex:1,
            justifyContent: 'center',
            paddingHorizontal: 10,   
        }}>
            <View style={styles.list}>
                <Text style={styles.name}>이름</Text>
                <TextInput style={styles.input} onChangeText={onChangeText} value={text}/>
            </View>
            <View>
                <Text style={styles.name}>나이</Text>
                <TextInput style={styles.input} keyboardType={'numeric'} setAge={setAge} value={age}></TextInput>
            </View>
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  name: {
    paddingLeft: 10,
    textAlign: 'left'
  },
  list:{
    justifyContent: 'space-between',
  }
});

export default Profile;