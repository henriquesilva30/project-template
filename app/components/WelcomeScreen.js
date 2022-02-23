import React , {useState} from 'react';
import { View, ImageBackground, StyleSheet, Image, Text, Pressable, Modal, TextInput} from 'react-native';
import styles from '../config/styles';


function WelcomeScreen({ navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleReg, setModalVisibleReg] = useState(false);


  return (
        <ImageBackground style={styles.welcome} source={require('../assets/bg.jpg')}>
            <View style={styles.bglogo}>
            </View>
            <Image style={styles.logo} source={require('../assets/logo.jpg')} />
            {/* Modal Login */}
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
              <Text style={styles.modalText}>Login </Text>
              <TextInput placeholder="Utilizador" style={styles.inputModal}/>
              <TextInput placeholder="Palavra-chave" secureTextEntry  style={styles.inputModal}/>

              <Pressable
                style={styles.btnModal}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Entrar</Text>
              </Pressable>
              <Pressable
                style={styles.btnModal}
                onPress={() => [setModalVisible(!modalVisible)]}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              <Text style={styles.modalRegText} onPress={() => [setModalVisible(false), setModalVisibleReg(true)]}>Registar</Text>
            </View>
          </View>
        </Modal>
        {/* Modal registar  */}
        <Modal 
          animationType="fade"
          transparent={true}
          visible={modalVisibleReg}
          onRequestClose={() => {
            setModalVisibleReg(!modalVisibleReg);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Registar </Text>
              <TextInput placeholder="Utilizador"  style={styles.inputModal}/>
              <TextInput placeholder="Palavra-chave" secureTextEntry   style={styles.inputModal}/>

              <Pressable
                style={styles.btnModal}
                onPress={() => setModalVisibleReg(!modalVisibleReg)}
              >
                <Text style={styles.textStyle}>Entrar</Text>
              </Pressable>
              <Pressable
                style={styles.btnModal}
                onPress={() => [setModalVisibleReg(!modalVisibleReg)]}
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