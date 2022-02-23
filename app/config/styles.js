import {StyleSheet} from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import colors from '../config/colors';

const Styles = StyleSheet.create({
  bglogo:{
    width:250,
    height:250,
    justifyContent:'center',
    backgroundColor:colors.white,
    alignSelf:'center',
    opacity:0.4,
    position:'absolute',
    bottom:'50%',
    borderRadius:200,
  },
  welcome:{
    flex:1,
    justifyContent:'flex-end',
},
home: {
  flex: 1,
  backgroundColor:colors.secondary
},
input:{
  height:60,
  padding:20,
  margin:5,
  marginTop:25,
  borderRadius:15,
  fontSize:18,
  borderWidth:2,
  backgroundColor:colors.white,
  color:colors.black
},
inputModal:{
  height:40,
  width:'100%',
  padding:10,
  margin:5,
  borderRadius:15,
  fontSize:16,
  borderWidth:2,
  backgroundColor:colors.white,
  color:colors.black
},

btn: {
  flex:1,
  backgroundColor:colors.secondary,
  margin:5,
  width:'50%',
  alignSelf:'center',
  borderColor:colors.black,
  borderWidth:2,
  elevation: 10,
  borderRadius: 20,
  padding: 10,
},
btnText:{
  fontSize:20,
  textAlign:'center',
  color:colors.white,
},
loginBtn:{
    width:'100%',
    height:70,
    backgroundColor:colors.primary
},
regBtn:{
    width:'100%',
    height:70,
    backgroundColor:colors.secondary
},

logo : {
    width:200,
    height:200,
    alignSelf:'center',
    borderRadius:200,
    borderWidth:1,
    position:'absolute',
    bottom:'50%',
    marginBottom:25,
    borderColor:colors.black,
},
txt: {
    alignSelf:'center',
    color:colors.white,
    fontSize:18,
    top:'35%',
},
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  height:320,
  width:300,
  opacity:1,
  margin: 20,
  backgroundColor: colors.white,
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: colors.secondary,
  shadowOffset: {
    width: 1,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
btnModal: {
  backgroundColor:colors.secondary,
  margin:5,
  alignSelf:'center',
  borderColor:colors.black,
  borderWidth:2,
  elevation: 10,
  borderRadius: 20,
  padding: 10,
  width:'100%',
  height:40,
  alignItems:'center',
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
},
modalText: {
  color:colors.black,
  fontSize:18,
  marginBottom: 15,
  textAlign: "center",
},
modalRegText: {
  color:colors.black,
  fontSize:14,
  marginTop: '5%',
  textAlign: "center",
  justifyContent:'flex-end',
  textDecorationLine:'underline',
  color:colors.blue

},
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

export default Styles;