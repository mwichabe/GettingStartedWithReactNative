import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button} from "react-native";
import { TextInput } from "react-native-web";

export default function App() {
  const [firstName, setName] = useState('Collins');
  const [person, setPerson] = useState({ lastNme: 'Wakasiaka', age: 40 });

  const clickHandler = () => {
    setName('Mwichabe');
    setPerson({ lastNme: "Jane", age: 22 });
  }

  return (
    <View style={styles.container}>
      <View style={styles.headers}>
        <Text style={styles.boldText}>
          My name is {firstName}
        </Text>
        <Text style={styles.boldText}>
          His name is {person.lastNme} and his age is {person.age}
        </Text>
        <TextInput style={styles.input}
        placeholder={person.lastNme}
        onChangeText={(val)=>setName(val)}
        >

        </TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Update Name" onPress={clickHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headers: {
    backgroundColor: "transparent",
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 120, 
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    width: 200,
    padding: 18,
    margin: 20,
    multiline: true
  }
});