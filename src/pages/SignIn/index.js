import React, {useState, useEffect, useReducer} from 'react';
import { SafeAreaView } from 'react-native';
import { Title } from 'react-native-paper';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';

export default function SignIn({navigation}){
    const [email, setEmail] = useState('')
    const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
    const [opacity] = useReducer(new Animated.Value(0))

    useEffect(()=>{
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue:0,
                speed:4,
                bounciness:20
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration:200,
            })
        ]).start();
}, []);

    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Image style={{height: 200, width: 200}} source={{uri: 'https://png.pngtree.com/png-vector/20191003/ourlarge/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg'}}/>
                
            </View>
            <Animated.View style={[
                styles.container,
                {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y}
                    ]
                }
                ]}>
                <TextInput
                style={styles.input}
                placeholder="Email"
                autoCorrect={false}
                onChangeText={(Text)=> {setEmail(Text)}}
                />

                <TextInput
                style={styles.input}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={(Text)=> {setEmail(Text)}}
                />

                <TouchableOpacity style={styles.btnSubimit}>
                    <Text style={styles.submitText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.REgisterText}>Criar Conta</Text>
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>
    )
};
const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerLogo:{
        flex:1,
        justifyContent:'center',
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        paddingBottom:50
    },
    input:{
        backgroundColor:'#fff',
        width:'90%',
        marginBottom:15,
        color:'#222',
        fontSize: 17,
        borderRadius:7,
        padding:10,
    },
    btnSubimit:{
        backgroundColor:'#35AAFF',
        width:'90%',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7
    },
    submitText:{
        color:'#fff',
        fontSize:18,
    },
    btnRegister:{
        marginTop:10,
    },
    REgisterText:{
        color:'#000',

    }
})