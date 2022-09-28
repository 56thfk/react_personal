import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style = {styles.mainView}>
      <View style = {styles.subView}>
        <Text>Hello World</Text>
      </View>

      <View style = {styles.anotherView}>
        <Text style = {styles.mainText}> Hello World</Text>
      </View>
    </View>
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
