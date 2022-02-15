import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const AddItem = ({title}) => {
  return (
   <View>
     <TextInput placeholder="Adicionar artigo" style={styles.input}/>
     <TouchableOpacity style={styles.btn}>
       <Text style={styles.btnText}>Adicionar</Text>
     </TouchableOpacity>
   </View>
  );
};


const styles = StyleSheet.create({
  input:{
    height:40,
    padding:10,
    margin:5,
    marginTop:25,
    borderRadius:15,
    fontSize:16,
    borderWidth:2,
    backgroundColor:'#0BF'
},
btn: {
    backgroundColor:'#F99',
    padding:10,
    margin:5,
    width:'40%',
    alignSelf:'center',
    borderRadius:100
},
btnText:{
    fontSize:20,
    textAlign:'center',
    color:'black',
}
});

export default AddItem;