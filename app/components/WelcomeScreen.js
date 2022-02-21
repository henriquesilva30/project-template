import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text, Pressable} from 'react-native';
import colors from '../config/colors';

function WelcomeScreen({ navigation}) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/bg.jpg')}>
            <View style={styles.bglogo}>
            </View>
            <Image style={styles.logo} source={require('../assets/logo.jpg')} />
            <Pressable style={styles.loginBtn}>
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
        bottom:'40%',
        borderRadius:200,
    },
    logo : {
        width:200,
        height:200,
        alignSelf:'center',
        position:'absolute',
        bottom:'61%',
        borderRadius:200,
        borderWidth:1,
        borderColor:colors.black,

    },
    txt: {
        alignSelf:'center',
        color:colors.white,
        fontSize:18,
        top:'35%',
    }
})

export default WelcomeScreen;