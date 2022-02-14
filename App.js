import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, ScrollView, TextInput,StyleSheet, Button } from 'react-native';
import React, { Component } from 'react'




class App extends Component {
  state = { isHungry: true };
  render(){
  return (
    <ScrollView style={styles.container} >
      {/* <StatusBar style="auto" /> */}
    <View >
      <Text> Cat name: {this.props.name}</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
    <TextInput
      style={styles.input}
      defaultValue="You can type in me"
    />
    
    <Text style={{marginTop:15,marginBottom:15}}>
          I am {this.props.name}, and I am
          {this.state.isHungry ? " hungry" : " full"}!
        </Text>
        <Button  style={styles.button}
          onPress={() => {
            this.setState({ isHungry: false });
          }}
          disabled={!this.state.isHungry}
          title={
            this.state.isHungry ? "Pour me some milk, please!" : "Thank you!"
          }
        />
  </ScrollView>


);
}
}
class Cafe extends Component {
  render() {
    return (
      <>
        <App name="Munkustrap"/>
        <App name="Spot" />
      </>
    );
  }
}




const styles = StyleSheet.create({
  container:{
    marginBottom:10,
    marginTop:15,
    backgroundColor:'#AAF',   
    margin:5, 
    padding:15,
    borderRadius:4,
    borderColor:'gray',
    borderWidth:3,
   
    
  },
  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding:5,
    backgroundColor:'#FFF',
    borderRadius:4,
    paddingLeft:15
  }
})


export default Cafe;
