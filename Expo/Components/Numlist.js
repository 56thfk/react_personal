import {Text, StyleSheet, TouchableOpacity} from 'react-native'
const NumList = (props) => (
    props.num.map((item, idx) => (
        <TouchableOpacity 
            style = {styles.numList}
            key = {idx}
            onPress={()=>props.delete(idx)}
        >
            <Text>{item}</Text>
        </TouchableOpacity>
    ))
)

const styles = StyleSheet.create({
    numList:{
        backgroundColor: '#cecece',
        padding: 5,
        alignItems: 'center',
        width: '100%',
    },
})
export default NumList;