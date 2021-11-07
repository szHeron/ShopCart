import React, { useContext } from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import { Title, Text, Button } from 'react-native-paper';
import CartContext from '../../context/CartContext';
import { styles } from './styles';

export default function Product({navigation, route}){
    const { AddCart, Exists } = useContext(CartContext);

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.ProductContent}>
                <Image style={{width: 400, height: 300}} source={{uri: route.params.item.img}}/>
                <Text style={{fontSize: 30}}>{route.params.item.name}</Text>
                <Text style={{fontSize: 20, marginBottom: 10}}>{route.params.item.brand}</Text>
                <Text style={{fontSize: 26, color: 'green'}}>Por R$ {route.params.item.price}</Text>
                <Text style={{fontSize: 20}}>Ou 6x de R$ {(route.params.item.price/6).toFixed(2)}</Text>
            </View>
            <Button icon="cart" style={styles.BuyButton} color="#add" mode="contained" onPress={() =>{
                    AddCart(route.params.item);
                    navigation.navigate('Cart');
                }
            }>
                Comprar
            </Button>
        </SafeAreaView>
    )
};