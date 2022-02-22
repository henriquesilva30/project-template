import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from '../config/styles';


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




export default AddItem;