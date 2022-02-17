import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title} </Text>
    </View>
  );
};

Header.defaultProps = {
    title:'Bem-vindo',
};

const styles = StyleSheet.create({
    header: {
   height:60,
   padding:15,
   backgroundColor:'#F99'
  },
  text:{
      color:'#FFF',
      fontSize:23,
      textAlign:'center',
  }
});

export default Header;