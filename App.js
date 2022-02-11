import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}


export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name ="Henrique"/>
      <Greeting name ="Joel"/>
      <Greeting name ="Lima"/>
      <Greeting name ="Silva"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center:{
    display:'flex',
    alignItems:'center',
    width:'50%',
    margin:5,
    backgroundColor:'#f00'
  }
});
