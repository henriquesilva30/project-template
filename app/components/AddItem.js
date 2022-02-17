import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const AddItem = ({title, addItem}) => {
  const  [text,setText] = useState('');

  const onChange = textValue => setText(textValue);

  return (
   <View>
     <TextInput placeholder="Adicionar artigo" onChangeText={onChange} value={text} style={styles.input}/>
     <TouchableOpacity style={styles.btn} onPress={() => {addItem(text); setText('');}} >
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
    backgroundColor:'#0BF',
    color:'white'
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
    color:'white',
}
});

export default AddItem;