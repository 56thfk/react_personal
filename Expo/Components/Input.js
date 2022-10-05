import {View, StyleSheet, TextInput} from 'react-native';
import {useState} from 'react';

const Input = () => {
    const [myTextInput, setMyTextInput] = useState ("")
    const onChangeInput = (event) => {
        console.log("event", event)
        setMyTextInput(event)
    }
    return (
        <View style = {styles.mainView}>
            <TextInput
                value={myTextInput}
                style={styles.input}
                onChangeText={onChangeInput}
                multiline={true}
                maxLength={10}
                editable={true}>
                </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        width:'100%',
        backgroundColor: "#cecece",
        marginTop: 20,
        fontSize: 25,
        padding: 10
    },
    mainView:{
        width: "100%"
    }
})

export default Input;