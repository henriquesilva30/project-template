import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text} from 'react-native';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/bg.jpg')}>
            <View style={styles.bglogo}>
            </View>
            <Image style={styles.logo} source={require('../assets/logo.jpg')} />
            <View style={styles.loginBtn}>
                <Text  style={styles.txt}>Aceder à conta</Text>
            </View>
            <View style={styles.regBtn}>
            <Text  style={styles.txt}>Visitar loja</Text>
            </View>
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
        bottom:'27%',
        borderRadius:200

    },
    logo : {
        width:150,
        height:150,
        alignSelf:'center',
        position:'absolute',
        bottom:'50%',
        borderRadius:200

    },
    txt: {
        alignSelf:'center',
        color:colors.white,
        fontSize:18,
        top:'35%',
    }
})

export default WelcomeScreen;