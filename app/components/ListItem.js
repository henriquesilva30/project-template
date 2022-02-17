import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from '../config/colors';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}> 
      <Text style={styles.listItemText}>{item.text}</Text>
      <Text style={styles.listItemIcon}  onPress={() => deleteItem(item.id)}>x</Text>   
      {/* <Icon style={styles.listItemIcon}  onPress={() => deleteItem(item.id)}>x</Icon>   font family error */} 
      {/* <Icon name='remove' size={20} color="firebrick"/>    */}
        </View>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
    listItem:{
        padding:7,
        backgroundColor:colors.primary,
        margin:2,
        borderRadius:10,
        borderColor:colors.black,
        borderWidth:2

    },
    listItemView: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.white,
        padding:10,
        borderRadius:5

    },
    listItemText:{
        fontSize:18,
        color:colors.black,
    },
    listItemIcon:{
      fontSize:20,
       color:colors.delete,
       textAlign:'center',
       width:20,
       height:25

    }
});

export default ListItem;