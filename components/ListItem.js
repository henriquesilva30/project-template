import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import  Icon  from '@fortawesome/react-native-fontawesome'


const ListItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}> 
      <Text style={styles.listItemText}>{item.text}</Text>
      <Icon name="remove" size={20} color="firebrick"/>
      </View>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
    listItem:{
        padding:15,
        backgroundColor:'#afa',
        margin:5,
        borderRadius:10

    },
    listItemView: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#3f0',
        padding:5
    },
    listItemText:{
        fontSize:18
    }
});

export default ListItem;