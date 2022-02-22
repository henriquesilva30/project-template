import React , {useState} from 'react';
import { View, ImageBackground, StyleSheet, Image, Text, Pressable, Modal, TextInput} from 'react-native';
import styles from '../config/styles';

function WelcomeScreen({ navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const  [text,setText] = useState('');

  const onChange = textValue => setText(textValue);

  return (
        <ImageBackground style={styles.welcome} source={require('../assets/bg.jpg')}>
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



export default WelcomeScreen;