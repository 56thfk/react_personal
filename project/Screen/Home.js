import {Text, View, StyleSheet, Button} from 'react-native';

import GyroscopeSensor from 'project/Sensors/GyroscopeSensor';
import AccelerometerSensor from 'project/Sensors/AccelerometerSensor';
import MagnetometerSensor from 'project/Sensors/MagnetometerSensor';

const Home = (props) => {
    return (
        <View style={{
            flex:1,
            justifyContent: 'center',
            paddingHorizontal: 10,   
        }}>
            <Button
                title='To Start Screen'
                onPress={()=>{
                    props.navigation.navigate("Start")
                }}/>
            <GyroscopeSensor></GyroscopeSensor>
            <AccelerometerSensor></AccelerometerSensor>
            <MagnetometerSensor></MagnetometerSensor>
        </View>
    );
}

export default Home;