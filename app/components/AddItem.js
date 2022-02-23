import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from '../config/styles';



const AddItem = ({title, addItem}) => {
  const  [text,setText] = useState('');

  const onChange = textValue => setText(textValue);

  return (
   <View>
     
     <TextInput style={styles.input}   placeholder="Adicionar artigo" onChangeText={onChange} value={text}/>
     <TouchableOpacity style={[styles.btn, styles.button]} onPress={() => {addItem(text); setText('');}} >
       <Text style={styles.btnText}>Adicionar</Text>
     </TouchableOpacity>
   </View>
  );
};




export default AddItem;