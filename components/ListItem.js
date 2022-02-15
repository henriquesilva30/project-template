import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-fontawesome';





const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}> 
      <Text style={styles.listItemText}>{item.text}</Text>
      <Icon icon='x' style={styles.listItemIcon}  onPress={() => deleteItem(item.id)}/>   
      {/* <Icon name='remove' size={20} color="firebrick"/>    */}
        </View>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
    listItem:{
        padding:7,
        backgroundColor:'#afa',
        margin:2,
        borderRadius:10,
        borderColor:'black',
        borderWidth:2

    },
    listItemView: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        padding:10,
        borderRadius:5

    },
    listItemText:{
        fontSize:18,
        color:'black',
    },
    listItemIcon:{
      fontSize:20,
       color:'firebrick',
       textAlign:'center',
       width:20,
       height:25

    }
});

export default ListItem;