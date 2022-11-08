import React from 'react'
import { SafeAreaView, View, StyleSheet, Button, TextInput, Text} from 'react-native';


const Profile = (props) => {
    const [ID, onChangeID] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);
    const [age, setAge] = React.useState(0);
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

    return (
        <SafeAreaView style={{
            flex:1,
            justifyContent: 'center',
            paddingHorizontal: 10,   
        }}>
            <View style={styles.container_row}>
              <TextInput style={styles.input} onChangeID={onChangeID} value={ID} placeholder="ID" placeholderTextColor='grey'/>  
            </View>
            <View style={styles.container_row}>
              <TextInput style={styles.input} keyboardType={'numeric'} setAge={setAge} value={age} placeholder='Age' placeholderTextColor='grey'></TextInput>
            </View>
            <View  style={styles.container_row}> 
                <TextInput style={styles.input} placeholder="First Name" setFirstName={setFirstName} value={firstName} placeholderTextColor='grey'/>
                <TextInput style={styles.input} placeholder="Last Name" setLastName={setLastName} value={lastName} placeholderTextColor='grey'/>
            </View>
            <View>
              
            </View>
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    flex: 1,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: 'black',
  },
  name: {
    paddingLeft: 10,
    textAlign: 'left'
  },
  list:{
    justifyContent: 'space-between',
  },
  container_row: {
    flexDirection: 'row',
  },
  container_column: {
    flexDirection: 'column',
  },
});

export default Profile;