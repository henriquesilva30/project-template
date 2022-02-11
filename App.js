import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  TouchableOpacity,  View } from 'react-native';
import React, { Component } from 'react'


const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}


class App extends Component {
  state = {
    count: 0
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
  return (
    <View style={styles.container}>
      <Greeting name ="Henrique"/>
      <Greeting name ="Joel"/>
      <Greeting name ="Lima"/>
      <Greeting name ="Silva"/>
      <StatusBar style="auto" />
      <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>
            You clicked { this.state.count } times
          </Text>
        </View>
    </View>
  );
}
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
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10
  }
})

export default App;
