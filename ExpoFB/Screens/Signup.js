import {useState} from react;
import {View, TextInput, Button} from 'react-native';
import {db} from './firebaseConfig';
import {addDoc, collection} from 'firebase/firestore';

const Signup = () => {
    const [addName, setAddName] = useState('');
    const [addAge, setAddAge] = useState('');
    const [users, setUsers] = useState();

    const readfromDB = async () => {
        try{
            const data = await getDocs(collection(db, "user"))
            setUsers(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }catch(error){
            console.log(error)
        }
    }

    const addtoDB = async () =>{
        try{
          await addDoc(collection(db, user), {
            addName: addName,
            addAge: addAge,
            creatdAt: new Date(),
          });
          alert("Added !!")
          setAddName("")
          setAddAge("")
        }catch(error) {
            console.log(error)
        }
    }
    
    return (
        <View>
            <TextInput
                placeholder='name'
                value={addName}
                onChangeText={setAddName}
            />
            <TextInput
               placeholder='age'
               value={addAge}
               onChangeText={setAddAge} 
            />
            <Button title="Add Text" onPress={addtoDB} />
            <Button title="Read Text" onPress={readfromDB}/>
            {users?.map((row, idx) => {
                return(
                    <>
                        <Text>User- {idx}</Text>
                        <Text>{row.id}</Text>
                        <Text>{row.addName}</Text>
                        <Text>{row.addAge}</Text>
                    </>
                );
            })}
        </View>
    );
}

export default Signup;