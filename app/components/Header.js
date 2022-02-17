import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from '../config/colors';

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
   backgroundColor:colors.primary
  },
  text:{
      color:colors.white,
      fontSize:23,
      textAlign:'center',
  }
});

export default Header;