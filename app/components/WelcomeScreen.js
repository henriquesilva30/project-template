import React , {useState} from 'react';
import { View, ImageBackground, StyleSheet, Image, Text, Pressable, Modal, TextInput} from 'react-native';
import colors from '../config/colors';

function WelcomeScreen({ navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const  [text,setText] = useState('');

  const onChange = textValue => setText(textValue);

  return (
        <ImageBackground style={styles.background} source={require('../assets/bg.jpg')}>
            <View style={styles.bglogo}>
            </View>
            <Image style={styles.logo} source={require('../assets/logo.jpg')} />
            <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Login \  
              <Text style={styles.modalText}> Registar</Text></Text>
              <TextInput placeholder="Adicionar artigo" onChangeText={onChange} value={text} style={styles.input}/>
              <TextInput placeholder="Adicionar artigo" onChangeText={onChange} value={text} style={styles.input}/>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
            <Pressable style={styles.loginBtn}  onPress={() => setModalVisible(true)}>
                <Text style={styles.txt} >Aceder à conta</Text> 
            </Pressable>
            <Pressable style={styles.regBtn}  onPress={() => navigation.navigate('Home')} >
            <Text style={styles.txt}>Visitar loja</Text>
            </Pressable>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',

    },
    input:{
      height:40,
      padding:10,
      margin:5,
      marginTop:25,
      borderRadius:15,
      fontSize:16,
      borderWidth:2,
      backgroundColor:colors.white,
      color:colors.black
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
      height:300,
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
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: 'green',
    },
    buttonClose: {
      backgroundColor: 'red',
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
})

export default WelcomeScreen;