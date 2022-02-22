import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styles from '../config/styles';


const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}> 
      <Text style={styles.listItemText}>{item.text}</Text>
      <Text style={styles.listItemIcon}  onPress={() => deleteItem(item.id)}>x</Text>   
      {/* <Icon style={styles.listItemIcon}  onPress={() => deleteItem(item.id)}>x</Icon>   font family error */} 
       {/* <Icon name='remove' size={20} color="firebrick"/>    */}
       {/* <FontAwesomeIcon icon="fa-solid fa-delete-right" /> */}
        </View>
    </TouchableOpacity>
  );
};


export default ListItem;