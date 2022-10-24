import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import {useState} from 'react';
import Slider from '@react-native-community/slider'

const PickerComponent = () => {
    const [country, setCountry] = useState("")
    const [value, setValue] = useState(50)

    return(
        <View style={styles.container}>
            <Slider
                style={{width:300, padding:10}}
                value = {value}
                minimumValue = {0}
                maximumValue = {100}
                onValueChange={(val)=>{setValue(val)}}
                minimumTrackTintColor='red'
                maximumTrackTintColor='blue'
                step={1}   
            ></Slider>
            <Text style={styles.text}>{value}</Text>
            <Picker
                style = {{width:200}}
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
    },
    text:{
        marginTop: 20,
        fontSize: 25
    }
})

export default PickerComponent;