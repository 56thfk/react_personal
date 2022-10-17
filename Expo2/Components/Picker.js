import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import {useState} from 'react';

const PickerComponent = () => {
    const [country, setCountry] = useState("")
    return(
        <View style={styles.container}>
            <Picker
                style = {{height:50, width:20}}
                selectedCalue = {country}
                onValueChange={(val, idx)=>setCountry(val)}
            >
                <Picker.Item label='Korea' value="korea"></Picker.Item>
                <Picker.Item label='USA' value="usa"></Picker.Item>
            </Picker>
            <Text>Pickers</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 20,
        marginTop: 200,
        alignItems: 'center'
    } 
})

export default PickerComponent;