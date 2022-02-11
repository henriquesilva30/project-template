import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, ScrollView, TextInput,StyleSheet } from 'react-native';
import React, { Component } from 'react'




const App = () => {
  return (
    <ScrollView >
      <StatusBar style="auto" />
    <View style={styles.container}>
      <Text>Some more text</Text>
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
  </ScrollView>


);
}

const styles = StyleSheet.create({
  container:{
    marginBottom:10,
    marginTop:'15%',
    backgroundColor:'#AAF',   
    opacity:0.5,
    margin:5, 
    padding:15,
    borderRadius:4,
    borderColor:'gray',
    borderWidth:3,
   
    
  },
  input:{
    margin:5, 
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding:5
  }
})


export default App;
