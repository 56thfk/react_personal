import {Text, View, StyleSheet, Button} from 'react-native';

const Home = (props) => {
    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text>Home Screen</Text>
            <Button
                title='To User Screen'
                onPress={()=>{
                    props.navigation.navigate("User", {
                        userIdx: 100,
                        userName: "SeongYeon",
                        userLastName: "Won"
                    })
                }}/>
            <Button 
            title = "Change the Title"
            onPress={() => 
                props.navigation.setOptions({
                    title:"Changed",
                    headerStyle:{
                        backgroundColor:'pink'
                    },
                headerTintColor: 'red'})
            }>
            </Button>
        </View>
    );
}

export default Home;